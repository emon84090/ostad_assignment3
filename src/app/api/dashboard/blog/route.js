export async function POST(req, res) {
  const prisma = new PrismaClient();
  try {
    const data = await req.json();
    const result = await prisma.post.create({
      data: data,
    });
    return NextResponse.json(
      {
        status: true,
        message: "blog created success",
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

export async function PATCH(req, res) {
  const { searchParams } = new URL(req.url);
  const id = Number(searchParams.get("id"));
  const prisma = new PrismaClient();
  try {
    const data = await req.json();
    const result = await prisma.post.update({
      where: { id: id },
      data: data,
    });

    return NextResponse.json(
      {
        status: true,
        data: result,
        message: "data updated success",
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

export async function DELETE(req, res) {
  const { searchParams } = new URL(req.url);
  const id = Number(searchParams.get("id"));
  const prisma = new PrismaClient();
  try {
    const result = await prisma.post.delete({
      where: { id: id },
    });

    return NextResponse.json(
      {
        status: true,
        data: result,
        message: "data deleted success",
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
