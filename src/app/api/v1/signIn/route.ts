import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dbConnect from "../../../../lib/dbConnect";
import UserModel from "../../../../model/User";

export async function POST(req: NextRequest) {
  try {
    if (req.method !== "POST") {
      return Response.json(
        { success: false, message: "Method not allowed" },
        { status: 405 },
      );
    }
    await dbConnect();
    const { userIDorEmail, password } = await req.json();
    const user = await UserModel.findOne({
      $or: [{ email: userIDorEmail }, { userID: userIDorEmail }],
    });
    if (!user) {
      return Response.json(
        {
          success: false,
          message: "User does not exist. Please create a new account",
        },
        { status: 400 },
      );
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return Response.json(
        { success: false, message: "Incorrect Password. Please try again." },
        { status: 400 },
      );
    }
    const tokenData = {
      id: user._id,
      userID: user.userID,
      email: user.email,
    };
    const jwtSecret = process.env.JWT_TOKEN_SECRET;
    if (!jwtSecret) {
      return Response.json(
        {
          success: false,
          message: "JWT secret is not configured on the server.",
        },
        { status: 500 },
      );
    }
    const token = await jwt.sign(tokenData, jwtSecret, {
      expiresIn: "12h",
    });

    const response = NextResponse.json(
      { success: true, message: "User logged in successfully" },
      { status: 200 },
    );

    response.cookies.set("signInToken", token, { httpOnly: true, path: "/" });

    return response;
  } catch (err) {
    return Response.json({ success: false, message: err }, { status: 500 });
  }
}
