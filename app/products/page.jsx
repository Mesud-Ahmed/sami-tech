"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const products = [
  {
    id: 1,
    name: "HP Pavilion 15",
    price: 799,
    image: "/laptops/hp-pavilion.jpg",
    specs: "i5, 8GB RAM, 512GB SSD",
  },
  {
    id: 2,
    name: "Dell Inspiron 14",
    price: 899,
    image: "/laptops/dell-inspiron.jpg",
    specs: "i7, 16GB RAM, 1TB SSD",
  },
  {
    id: 3,
    name: "Lenovo ThinkPad X1",
    price: 1199,
    image: "/laptops/lenovo-thinkpad.jpg",
    specs: "i7, 16GB RAM, 512GB SSD",
  },
  {
    id: 4,
    name: "MacBook Air M1",
    price: 999,
    image: "/laptops/macbook-air.jpg",
    specs: "M1, 8GB RAM, 256GB SSD",
  },
];

const brands = ["HP", "Dell", "Lenovo"];
const rams = ["8GB", "16GB", "32GB"];
const storages = ["256GB SSD", "512GB SSD", "1TB SSD"];
const processors = ["i5", "i7", "M1"];

export default function ProductsPage() {
  const [view, setView] = useState("grid");

  return (
    

    <div className=" p-3 flex flex-col md:flex-row min-h-screen bg-gray-50">
        {/* Breadcrumbs */}
        <div className="mb-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Products</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white shadow-md rounded-md p-6 mb-4 md:mb-0 md:mr-6">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        {/* Brand */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Brand</h3>
          <div className="flex flex-col gap-2">
            {brands.map((brand) => (
              <label key={brand} className="flex items-center gap-2">
                <Checkbox />
                <span>{brand}</span>
              </label>
            ))}
          </div>
        </div>
        {/* Price Range
        <div className="mb-6">
          <h3 className="font-medium mb-2">Price Range</h3>
          <Slider min={500} max={2000} defaultValue={[500, 1500]} step={50} />
          <div className="flex justify-between text-xs mt-1 text-gray-500">
            <span>$500</span>
            <span>$2000</span>
          </div>
        </div> */}
        {/* RAM */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">RAM</h3>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select RAM" />
            </SelectTrigger>
            <SelectContent>
              {rams.map((ram) => (
                <SelectItem key={ram} value={ram}>
                  {ram}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {/* Storage */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Storage</h3>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Storage" />
            </SelectTrigger>
            <SelectContent>
              {storages.map((storage) => (
                <SelectItem key={storage} value={storage}>
                  {storage}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {/* Processor */}
        <div>
          <h3 className="font-medium mb-2">Processor</h3>
          <div className="flex flex-col gap-2">
            {processors.map((proc) => (
              <label key={proc} className="flex items-center gap-2">
                <Checkbox />
                <span>{proc}</span>
              </label>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <h1 className="text-2xl font-bold">Laptops</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">View:</span>
            <Switch
              checked={view === "list"}
              onCheckedChange={() => setView(view === "grid" ? "list" : "grid")}
            />
            <span className="text-sm">{view === "grid" ? "Grid" : "List"}</span>
          </div>
        </div>
        {/* Products */}
        <div
          className={cn(
            "gap-6",
            view === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              : "flex flex-col"
          )}
        >
          {products.map((product) =>
            view === "grid" ? (
              <Card
                key={product.id}
                className="flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-200"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-t-md"
                />
                <CardContent className="flex flex-col flex-1 p-4">
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <div className="text-primary font-bold text-xl mb-2">
                    ${product.price}
                  </div>
                  <div className="text-sm text-gray-600 mb-4">
                    {product.specs}
                  </div>
                  <Button className="mt-auto w-full">Buy Now</Button>
                </CardContent>
              </Card>
            ) : (
              <Card
                key={product.id}
                className="flex flex-row items-center shadow-sm hover:shadow-lg transition-shadow duration-200"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 object-cover rounded-l-md"
                />
                <CardContent className="flex flex-col flex-1 p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <div className="text-primary font-bold text-xl">
                      ${product.price}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    {product.specs}
                  </div>
                  <Button className="w-32">Buy Now</Button>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </main>
    </div>
  );
}
