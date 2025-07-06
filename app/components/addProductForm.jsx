'use client';

import { useState, useTransition } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createProduct } from '../actions';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Toaster, toast } from "sonner";
import UploadImages from "./uploadImages";

const brands = ["Acer", "Apple", "Asus", "Dell", "HP", "Lenovo", "MSI"];
const processors = ["i3", "i5", "i7", "i9", "M1", "M2", "Ryzen 5", "Ryzen 7"];
const rams = ["4GB", "8GB", "16GB", "32GB", "64GB"];
const storages = ["128GB SSD", "256GB SSD", "512GB SSD", "1TB SSD", "2TB SSD"];

export default function AddProductForm() {
  const [isPending, startTransition] = useTransition();

  // Controlled state for selects
  const [brand, setBrand] = useState("");
  const [processor, setProcessor] = useState("");
  const [ram, setRam] = useState("");
  const [storage, setStorage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const result = await createProduct(formData);

      if (!result.success) {
        toast.warning(`Missing: ${result.fields.join(", ")}`);
        return;
      }

      toast.success(result.message);
      e.target.reset();
      // Clear select states after form submit
      setBrand("");
      setProcessor("");
      setRam("");
      setStorage("");
    });
  };

  return (
    <>
      <Toaster richColors />
      <Card className="max-w-xl mx-auto">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-4">Add Product</h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-1.5">
              <Label htmlFor="name">Name <span className="text-red-500">*</span></Label>
              <Input id="name" name="name" required placeholder="Laptop name" />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="price">Price (in birr) <span className="text-red-500">*</span></Label>
              <Input id="price" name="price" type="number" required placeholder="e.g. 80000" />
            </div>

            {/* Brand Select */}
            <div className="space-y-1.5">
              <Label>Brand <span className="text-red-500">*</span></Label>
              <Select value={brand} onValueChange={setBrand}>
                <SelectTrigger>
                  <SelectValue placeholder="Select brand" />
                </SelectTrigger>
                <SelectContent>
                  {brands.map((b) => (
                    <SelectItem key={b} value={b}>{b}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <input type="hidden" name="brand" value={brand} />
            </div>

            {/* Processor Select */}
            <div className="space-y-1.5">
              <Label>Processor <span className="text-red-500">*</span></Label>
              <Select value={processor} onValueChange={setProcessor}>
                <SelectTrigger>
                  <SelectValue placeholder="Select processor" />
                </SelectTrigger>
                <SelectContent>
                  {processors.map((p) => (
                    <SelectItem key={p} value={p}>{p}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <input type="hidden" name="processor" value={processor} />
            </div>

            {/* RAM Select */}
            <div className="space-y-1.5">
              <Label>RAM <span className="text-red-500">*</span></Label>
              <Select value={ram} onValueChange={setRam}>
                <SelectTrigger>
                  <SelectValue placeholder="Select RAM" />
                </SelectTrigger>
                <SelectContent>
                  {rams.map((r) => (
                    <SelectItem key={r} value={r}>{r}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <input type="hidden" name="ram" value={ram} />
            </div>

            {/* Storage Select */}
            <div className="space-y-1.5">
              <Label>Storage <span className="text-red-500">*</span></Label>
              <Select value={storage} onValueChange={setStorage}>
                <SelectTrigger>
                  <SelectValue placeholder="Select storage" />
                </SelectTrigger>
                <SelectContent>
                  {storages.map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <input type="hidden" name="storage" value={storage} />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="gpu">GPU</Label>
              <Input id="gpu" name="gpu" placeholder="e.g. NVIDIA RTX 3060" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="screenSize">Screen Size</Label>
              <Input id="screenSize" name="screenSize" placeholder="e.g. 15.6 inch" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="displayType">Display Type</Label>
              <Input id="displayType" name="displayType" placeholder="e.g. Full HD IPS" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="batteryLife">Battery Life</Label>
              <Input id="batteryLife" name="batteryLife" placeholder="e.g. 10 hours" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="weight">Weight</Label>
              <Input id="weight" name="weight" placeholder="e.g. 1.5 kg" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="color">Color</Label>
              <Input id="color" name="color" placeholder="e.g. Silver" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="warranty">Warranty</Label>
              <Input id="warranty" name="warranty" placeholder="e.g. 1 year" />
            </div>

            {/* Image uploader — must include hidden input inside */}
            <UploadImages />

            <div className="space-y-1.5">
              <Label htmlFor="desc">Description <span className="text-red-500">*</span></Label>
              <Textarea id="desc" name="desc" required placeholder="Product description" />
            </div>

            <Button type="submit" className="w-full mt-2" disabled={isPending}>
              {isPending ? "Saving..." : "Add Product"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
