import prisma from '../../../lib/prisma'
import { NextResponse } from 'next/server';

export async function GET() {
  const products = await prisma.laptop.findMany();
  return NextResponse.json(products);
}