import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const prisma = new PrismaClient();

  const filter = {
    include: {
      category: true,
    },
    where: {
      title: { contains: "" },
    },
  };

  const { searchParams } = new URL(req.url);

  const type = searchParams.get("type");
  const search = searchParams.get("search");

  if (type) {
    filter.where.type = type;
  }

  if (search) {
    filter.where.title.contains = search;
  }

  try {
    const result = await prisma.post.findMany(filter);
    console.log(filter);
    return NextResponse.json(
      {
        status: true,
        data: result,
      },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        status: false,
        message: err?.message,
      },
      { status: 400 }
    );
  }
}
