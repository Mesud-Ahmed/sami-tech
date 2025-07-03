import prisma from '../../../../lib/prisma';
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  const { id } = await params;

  try {
    await prisma.laptop.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
