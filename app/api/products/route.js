import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const filter = searchParams.get("filter");

  let products;

  if (filter === "true") {
    // Apply filter
    products = await prisma.laptop.findMany({
      where: {
        price: {
          gt: 80000,
        },
      },
    });
  } else {
    // No filter
    products = await prisma.laptop.findMany();
  }

  return NextResponse.json(products);
}
