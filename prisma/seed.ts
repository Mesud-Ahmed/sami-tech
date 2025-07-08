import { PrismaClient } from '../app/generated/prisma'
import bcrypt from 'bcrypt';

async function main() {
  const prisma = new PrismaClient();

  const existing = await prisma.user.findUnique({
    where: { email: "admin@gmail.com" },
  });
  if (existing) {
    console.log("✋ Admin already exists, skipping.");
    return;
  }

  const hashed = await bcrypt.hash("supersecret123", 10);
  const admin = await prisma.user.create({
    data: {
      name: "Admin",
      email: "admin@gmail.com",
      password: hashed,
    },
  });

  console.log("✅ Admin created:", admin);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => process.exit())