import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({
      message: "Sign out successfully",
      success: true,
    });

    response.cookies.set("signInToken", "", {
      httpOnly: true,
      expires: new Date(0),
    });

    return response;
  } catch (error) {
    return NextResponse.json({ message: `${error}`, success: false });
  }
}
