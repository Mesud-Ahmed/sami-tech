"use server";
import { revalidatePath } from "next/cache";
import prisma from "../../lib/prisma";
import bcrypt from "bcrypt";
import { createSession } from "../lib/session";
import { redirect } from "next/navigation";

export async function createProduct(formData) {
  const requiredFields = [
    "name",
    "price",
    "brand",
    "processor",
    "ram",
    "storage",
    "desc",
  ];
  const missingFields = requiredFields.filter((field) => !formData.get(field));

  const name = formData.get("name");
  const price = parseFloat(formData.get("price"));
  const brand = formData.get("brand");
  const processor = formData.get("processor");
  const ram = formData.get("ram");
  const storage = formData.get("storage");
  const gpu = formData.get("gpu") || null;
  const screenSize = formData.get("screenSize") || null;
  const displayType = formData.get("displayType") || null;
  const batteryLife = formData.get("batteryLife") || null;
  const weight = formData.get("weight") || null;
  const color = formData.get("color") || null;
  const warranty = formData.get("warranty") || null;
  const description = formData.get("desc");
  const imageUrls = JSON.parse(formData.get("imageUrls"));

  if (imageUrls.length === 0) missingFields.push("imageUrls");

  if (missingFields.length > 0) {
    return {
      success: false,
      message: "Missing required fields",
      fields: missingFields,
    };
  }

  const laptop = await prisma.laptop.create({
    data: {
      name,
      price,
      brand,
      processor,
      ram,
      storage,
      gpu,
      screenSize,
      displayType,
      batteryLife,
      weight,
      color,
      warranty,
      description,
      imageUrls,
    },
  });
  revalidatePath("/admin");
  return { success: true, message: "Product created successfully" };
}


export async function login(_state, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  
  const user = await prisma.user.findUnique({ where: { email } });

 if (!user || !(await bcrypt.compare(password, user.password))) {
    return { error: "Incorrect email or password." };
  }

  
  await createSession(user.id);
  redirect("/admin");
}