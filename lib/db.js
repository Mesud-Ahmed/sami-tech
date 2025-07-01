import { PrismaClient } from "@/generated/prisma"

const prisma = new PrismaClient()

export async function getLaptops() {
  return await prisma.laptop.findMany()
}