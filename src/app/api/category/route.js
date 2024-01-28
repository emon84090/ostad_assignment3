import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const prisma = new PrismaClient();
  const { searchParams } = new URL(req.url);
  const details = searchParams.get("details");
  const catname = searchParams.get("name");

  const filter = {
    include: {
      post: details ? true : false,
    },
  };

  if (catname) {
    filter.where = {
      name: catname,
    };
  }

  try {
    const result = await prisma.category.findMany(filter);

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
