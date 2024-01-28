import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const prisma = new PrismaClient();
  const { searchParams } = new URL(req.url);
  const id = Number(searchParams.get("id"));
  try {
    const result = await prisma.post.findUnique({
      where: {
        id: id,
      },
      include: {
        category: {
          select: {
            name: true,
          },
        },
      },
    });
    if (!result) {
      return NextResponse.json(
        {
          status: false,
          message: "Invalid Id Or No Data Found",
        },
        {
          status: 400,
        }
      );
    }
    await prisma.post.update({
      where: { id: id },
      data: { views: { increment: 1 } },
    });

    return NextResponse.json(
      {
        status: true,
        data: result,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        status: false,
        message: err?.message,
      },
      { status: 400 }
    );
  }
}
