"use server";
import prisma from "../lib/prisma";
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

  return { success: true, message: "Product created successfully" };
}
