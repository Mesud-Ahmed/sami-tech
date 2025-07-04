"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { CldUploadWidget } from "next-cloudinary";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

const brands = ["Acer", "Apple", "Asus", "Dell", "HP", "Lenovo", "MSI"];
const processors = ["i3", "i5", "i7", "i9", "M1", "M2", "Ryzen 5", "Ryzen 7"];
const rams = ["4GB", "8GB", "16GB", "32GB", "64GB"];
const storages = ["128GB SSD", "256GB SSD", "512GB SSD", "1TB SSD", "2TB SSD"];

export default function AddProductForm() {
  const [imageUrl, setImageUrl] = useState([]);

  return (
    <Card className="max-w-xl mx-auto">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4">Add Product</h3>
        <form className="space-y-6">
          <div className="space-y-1.5">
            <Label htmlFor="name">
              Name <span className="text-red-500">*</span>
            </Label>
            <Input id="name" required placeholder="Laptop name" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="price">
              Price (in birr) <span className="text-red-500">*</span>
            </Label>
            <Input id="price" required type="number" placeholder="e.g. 80000" />
          </div>
          <div className="space-y-1.5">
            <Label>
              Brand <span className="text-red-500">*</span>
            </Label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select brand" />
              </SelectTrigger>
              <SelectContent>
                {brands.map((b) => (
                  <SelectItem key={b} value={b}>
                    {b}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label>
              Processor <span className="text-red-500">*</span>
            </Label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select processor" />
              </SelectTrigger>
              <SelectContent>
                {processors.map((p) => (
                  <SelectItem key={p} value={p}>
                    {p}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label>
              RAM <span className="text-red-500">*</span>
            </Label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select RAM" />
              </SelectTrigger>
              <SelectContent>
                {rams.map((r) => (
                  <SelectItem key={r} value={r}>
                    {r}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label>
              Storage <span className="text-red-500">*</span>
            </Label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select storage" />
              </SelectTrigger>
              <SelectContent>
                {storages.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="gpu">GPU</Label>
            <Input id="gpu" placeholder="e.g. NVIDIA RTX 3060" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="screenSize">Screen Size</Label>
            <Input id="screenSize" placeholder="e.g. 15.6 inch" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="displayType">Display Type</Label>
            <Input id="displayType" placeholder="e.g. Full HD IPS" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="batteryLife">Battery Life</Label>
            <Input id="batteryLife" placeholder="e.g. 10 hours" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="weight">Weight</Label>
            <Input id="weight" placeholder="e.g. 1.5 kg" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="color">Color</Label>
            <Input id="color" placeholder="e.g. Silver" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="warranty">Warranty</Label>
            <Input id="warranty" placeholder="e.g. 1 year" />
          </div>
          <div className="space-y-4">
            <CldUploadWidget
              uploadPreset="laptop-presets"
              onSuccessAction={(results) => {
                setImageUrl((prev) => [...prev, results.info.secure_url]); // You get the uploaded file's info
              }}
            >
              {({ open }) => (
                <button type="button"
                  onClick={() => open()}
                  className="w-full bg-blue-600 cursor-pointer text-white py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Upload Images
                </button>
              )}
            </CldUploadWidget>

            {imageUrl.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {imageUrl.map((url, index) => (
                  <div key={index} className="relative w-48 h-48">
                    <img
                      src={url}
                      alt={`Uploaded ${index + 1}`}
                      className="w-full h-full object-cover rounded"
                    />
                    <button type="button"
                      onClick={() =>
                        setImageUrl((prev) =>
                          prev.filter((_, i) => i !== index)
                        )
                      }
                      className="cursor-pointer absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center"
                      title="Remove"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="desc">
              Description <span className="text-red-500">*</span>
            </Label>
            <Textarea id="desc" required placeholder="Product description" />
          </div>
          <Button type="submit" className="w-full mt-2">
            Add Product
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
