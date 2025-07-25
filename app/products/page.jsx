"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import Image from "next/image";

const brands = ["Acer", "Apple", "Asus", "Dell", "HP", "Lenovo", "MSI"];
const processors = ["i3", "i5", "i7", "i9", "M1", "M2", "Ryzen 5", "Ryzen 7"];
const rams = ["4GB", "8GB", "16GB", "32GB", "64GB"];
const storages = ["128GB SSD", "256GB SSD", "512GB SSD", "1TB SSD", "2TB SSD"];

export default function ProductsPage() {
  const [view, setView] = useState("grid");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedRAM, setSelectedRAM] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [selectedProcessors, setSelectedProcessors] = useState([]);
  const [selectedLaptop, setSelectedLaptop] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const applyFilters = () => {
    setLoading(true);
    fetch("/api/filter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        brands: selectedBrands,
        priceRange: selectedPriceRange,
        ram: selectedRAM,
        storage: selectedStorage,
        processors: selectedProcessors,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  };

  return (
    <div className="p-3 flex flex-col md:flex-row min-h-screen bg-gray-50 mt-9">
      
      <aside className="w-full mt-7 md:w-64 bg-white shadow-md rounded-md p-6 mb-4 md:mb-0 md:mr-6">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>

        {/* Brand */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Brand</h3>
          <div className="flex md:flex-col gap-2 flex-row flex-wrap">
            {brands.map((brand) => (
              <div key={brand} className="px-6 md:px-1">
                <label className="flex items-center gap-2">
                  <Checkbox
                    checked={selectedBrands.includes(brand)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedBrands([...selectedBrands, brand]);
                      } else {
                        setSelectedBrands(
                          selectedBrands.filter((b) => b !== brand)
                        );
                      }
                    }}
                  />
                  <span>{brand}</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-medium mb-2">Price Range</h3>
          <Select
            onValueChange={setSelectedPriceRange}
            value={selectedPriceRange ?? undefined}
          >
            <SelectTrigger className="w-full cursor-pointer">
              <SelectValue placeholder="Select price range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-40000">Below Br 40,000</SelectItem>
              <SelectItem value="40000-60000">Br 40,000 - 60,000</SelectItem>
              <SelectItem value="60000-100000">Br 60,000 - 100,000</SelectItem>
              <SelectItem value="100000-150000">
                Br 100,000 - 150,000
              </SelectItem>
              <SelectItem value="150000+">Above Br 150,000</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* RAM */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">RAM</h3>
          <Select
            onValueChange={setSelectedRAM}
            value={selectedRAM ?? undefined}
          >
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
          <Select
            onValueChange={setSelectedStorage}
            value={selectedStorage ?? undefined}
          >
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
          <div className="flex md:flex-col gap-2 flex-row flex-wrap">
            {processors.map((proc) => (
              <div key={proc} className="px-6 md:px-1">
                <label className="flex items-center gap-2">
                  <Checkbox
                    checked={selectedProcessors.includes(proc)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedProcessors([...selectedProcessors, proc]);
                      } else {
                        setSelectedProcessors(
                          selectedProcessors.filter((p) => p !== proc)
                        );
                      }
                    }}
                  />
                  <span>{proc}</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <Button
            onClick={applyFilters}
            className="w-full cursor-pointer bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Apply Filters
          </Button>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4 md:mt-6">
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
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : products.length === 0 ? (
            <div className="text-gray-500 text-center py-10 w-full">
              No products found.
            </div>
          ) : (
            products.map((product) =>
              view === "grid" ? (
                <Card
                  key={product.id}
                  className="flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="w-full aspect-[4/3] overflow-hidden rounded-t-md">
                    <Image
                      src={product.imageUrls[0]}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <CardContent className="flex flex-col flex-1 p-4">
                    <h3 className="font-semibold text-lg mb-1">
                      {product.name}
                    </h3>
                    <div className="text-primary font-bold text-xl mb-2">
                      Br {product.price}
                    </div>
                    <div className="text-sm text-gray-600 mb-4">
                      {product.specs}
                    </div>
                    <Button
                      onClick={() => {
                        setSelectedLaptop(product);
                        setIsDialogOpen(true);
                      }}
                      className="mt-auto w-full cursor-pointer max-w-[200px] "
                    >
                      See Details
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card
                  key={product.id}
                  className="flex flex-row items-center shadow-sm hover:shadow-lg transition-shadow duration-200"
                >
                  <Image
                      src={product.imageUrls[0]}
                      alt={product.name}
                      width={300}
                      height={200}
                      className=""
                    />
                  <CardContent className="flex flex-col flex-1 p-4">
                    <div className="flex flex-col justify-between items-center">
                      <h3 className="font-semibold text-lg">{product.name}</h3>
                      <div className="text-primary font-bold text-xl">
                        ${product.price}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      {product.specs}
                    </div>
                    <Button
                      onClick={() => {
                        setSelectedLaptop(product);
                        setIsDialogOpen(true);
                      }}
                      className="mt-auto w-full cursor-pointer max-w-[200px] md:mx-auto"
                    >
                      See Details
                    </Button>
                  </CardContent>
                </Card>
              )
            )
          )}
        </div>
      </main>
      
      {/* MODAL: Laptop Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl w-full sm:rounded-2xl p-6 sm:p-8 bg-white overflow-y-auto max-h-[90vh]">
          {selectedLaptop && (
            <div className="space-y-4">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900">
                  {selectedLaptop.name}
                </DialogTitle>
                <DialogDescription className="text-gray-600">
                  {selectedLaptop.description || "No description available."}
                </DialogDescription>
              </DialogHeader>

              {/* Images */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {selectedLaptop.imageUrls.map((url, index) => (
                  <Image
                    key={index}
                    src={url}
                    alt={`Laptop image ${index + 1}`}
                    width={300}
                    height={200}
                    className="object-contain w-full h-auto rounded-md border"
                  />
                ))}
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-800">
                <div>
                  <strong>Brand:</strong> {selectedLaptop.brand}
                </div>
                <div>
                  <strong>Processor:</strong> {selectedLaptop.processor}
                </div>
                <div>
                  <strong>RAM:</strong> {selectedLaptop.ram}
                </div>
                <div>
                  <strong>Storage:</strong> {selectedLaptop.storage}
                </div>
                <div>
                  <strong>GPU:</strong> {selectedLaptop.gpu || "-"}
                </div>
                <div>
                  <strong>Screen:</strong> {selectedLaptop.screenSize || "-"}
                </div>
                <div>
                  <strong>Display:</strong> {selectedLaptop.displayType || "-"}
                </div>
                <div>
                  <strong>Battery:</strong> {selectedLaptop.batteryLife || "-"}
                </div>
                <div>
                  <strong>Weight:</strong> {selectedLaptop.weight || "-"}
                </div>
                <div>
                  <strong>Color:</strong> {selectedLaptop.color || "-"}
                </div>
                <div>
                  <strong>Warranty:</strong> {selectedLaptop.warranty || "-"}
                </div>
                <div className="text-lg font-bold text-blue-600">
                  Price: Br {selectedLaptop.price}
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <Button
                  onClick={() => {
                    window.location.href = `tel:+251941084897`;
                  }}
                  className="bg-blue-600 text-white hover:bg-blue-700 rounded-full"
                >
                  Call to Buy
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
