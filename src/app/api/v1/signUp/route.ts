import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import sendEmail from "@/helpers/sendEmail";

export async function POST(req: NextRequest) {
  await dbConnect();

  if (req.method !== "POST") {
    return NextResponse.json(
      { success: false, message: "Method not allowed" },
      { status: 405 },
    );
  }
  try {
    const {
      name,
      email,
      phoneNumber,
      institute,
      instituteCity,
      registrationID,
      password,
    } = await req.json();
    if (
      !name ||
      !email ||
      !phoneNumber ||
      !institute ||
      !instituteCity ||
      !registrationID ||
      !password
    ) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 },
      );
    }
    // Create a userID based on first 3 letters of institute and first 3 letters of instituteCity and registrationID
    const userID = `${institute.slice(0, 3).toUpperCase()}${instituteCity.slice(0, 3).toUpperCase()}${registrationID}`;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new UserModel({
      userID,
      email,
      phoneNumber,
      institute,
      instituteCity,
      registrationID,
      password: hashedPassword,
    });

    try {
      await sendEmail(
        email,
        "Welcome to Our Platform",
        "Thank you for signing up!",
        `<h1>Welcome, ${name}!</h1><p>Thank you for signing up with us. Your user ID is <strong>${userID}</strong>.</p>`,
      );
    } catch (emailError) {
      console.error("Error sending welcome email:", emailError);
    }

    await newUser.save();

    return NextResponse.json(
      { success: true, message: "User created successfully" },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error. Please try again later",
        errors: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
