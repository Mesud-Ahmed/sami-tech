
"use client";

import { useState } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

const navLinks = [
  { key: "dashboard", label: "Dashboard" },
  { key: "products", label: "Products" },
  { key: "add", label: "Add Product" },
  
];

const products = [
  {
    id: 1,
    name: "HP Pavilion 15",
    price: 799,
    stock: 12,
    image: "/laptops/hp-pavilion.jpg",
  },
  {
    id: 2,
    name: "Dell Inspiron 14",
    price: 899,
    stock: 8,
    image: "/laptops/dell-inspiron.jpg",
  },
  {
    id: 3,
    name: "Lenovo ThinkPad X1",
    price: 1199,
    stock: 5,
    image: "/laptops/lenovo-thinkpad.jpg",
  },
  
];

const brands = ["HP", "Dell", "Lenovo", "Apple"];
const processors = ["i5", "i7", "M1"];
const rams = ["8GB", "16GB", "32GB"];
const storages = ["256GB SSD", "512GB SSD", "1TB SSD"];

export default function AdminPanel() {
  const [active, setActive] = useState("products");

  return (


    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-56 bg-white shadow-md flex flex-col p-6">
        <h2 className="text-xl font-bold mb-8">Admin Panel</h2>
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Button
              key={link.key}
              variant={active === link.key ? "default" : "ghost"}
              className="justify-start"
              onClick={() => setActive(link.key)}
            >
              {link.label}
            </Button>
          ))}
        </nav>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
          <span className="text-lg font-semibold">Welcome, Admin!</span>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          {active === "dashboard" && (
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Dashboard</h3>
                <p className="text-gray-600">
                  Quick stats and overview coming soon.
                </p>
              </CardContent>
            </Card>
          )}

          {active === "products" && (
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Products</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-2 text-left font-semibold">Image</th>
                        <th className="p-2 text-left font-semibold">Name</th>
                        <th className="p-2 text-left font-semibold">Price</th>
                        <th className="p-2 text-left font-semibold">Stock</th>
                        <th className="p-2 text-left font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((p) => (
                        <tr key={p.id} className="border-b">
                          <td className="p-2">
                            <Image
                              width={64}
                              height={64}
                              src={p.image}
                              alt={p.name}
                              className=" object-cover rounded"
                            />
                          </td>
                          <td className="p-2">{p.name}</td>
                          <td className="p-2">{p.price}</td>
                          <td className="p-2">{p.stock}</td>
                          <td className="p-2 flex gap-2">
                            <Button size="sm" variant="outline">
                              Edit
                            </Button>
                            <Button size="sm" variant="destructive">
                              Delete
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}

          {active === "add" && (
            <Card className="max-w-xl mx-auto">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Add Product</h3>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Laptop name" />
                  </div>
                  <div>
                    <Label htmlFor="price">Price</Label>
                    <Input
                      id="price"
                      type="number"
                      placeholder="Price in birr eg. 80000"
                    />
                  </div>
                  <div>
                    <Label htmlFor="brand">Brand</Label>
                    <Select>
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
                  <div>
                    <Label htmlFor="processor">Processor</Label>
                    <Select>
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
                  <div>
                    <Label htmlFor="ram">RAM</Label>
                    <Select>
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
                  <div>
                    <Label htmlFor="storage">Storage</Label>
                    <Select>
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
                  <div>
                    <Label htmlFor="image">Image</Label>
                    <Input id="image" type="file" />
                  </div>
                  <div>
                    <Label htmlFor="desc">Description</Label>
                    <Textarea id="desc" placeholder="Product description" />
                  </div>
                  <Button type="submit" className="w-full mt-2">
                    Add Product
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}

          
        </main>
      </div>
    </div>
  );
}
