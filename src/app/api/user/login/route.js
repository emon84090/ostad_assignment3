import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { createToken } from "@/utils/JWTtokenhelper";
import bcrypt from "bcryptjs";

export async function POST(req, res) {
  try {
    let reqBody = await req.json();
    const prisma = new PrismaClient();
    const result = await prisma.user.findUnique({
      where: {
        email: reqBody["email"],
      },
    });

    if (!result) {
      return NextResponse.json({
        status: "fail",
        data: result,
        message: "email not registared",
      });
    }

    const checkpassword = bcrypt.compareSync(
      reqBody["password"],
      result["password"]
    );

    if (!checkpassword) {
      return NextResponse.json(
        {
          status: "fail",
          message: "password wrong",
        },
        { status: 401 }
      );
    }

    let token = await createToken(result["email"], result["id"]);

    let expireDuration = new Date(Date.now() + 24 * 60 * 60 * 1000);

    const cookieString = `token=${token}; expires=${expireDuration.toUTCString()} ;path=/`;

    return NextResponse.json(
      { status: "success", data: token },
      { status: 200, headers: { "set-cookie": cookieString } }
    );
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
