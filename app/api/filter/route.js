import prisma from '../../../lib/prisma'

import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const { brands, priceRange, ram, storage, processors } = body;

  let where = {};

  if (brands?.length) {
    where.brand = { in: brands };
  }

  if (ram) {
    where.ram = ram;
  }

  if (storage) {
    where.storage = storage;
  }

  if (processors?.length) {
    where.processor = { in: processors };
  }

  if (priceRange) {
    if (priceRange === "150000+") {
      where.price = { gte: 150000 };
    } else {
      const [min, max] = priceRange.split("-").map(Number);
      where.price = { gte: min, lte: max };
    }
  }

  try {
    const laptops = await prisma.laptop.findMany({ where });
    return NextResponse.json(laptops);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}