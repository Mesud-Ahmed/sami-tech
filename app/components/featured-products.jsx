"use client";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function FeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLaptop, setSelectedLaptop] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  useEffect(() => {
    fetch("/api/products?filter=true")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
        setFeaturedProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setFeaturedProducts([]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="px-4 md:px-16 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
        Featured Products
      </h2>

      <Carousel className="w-full">
        <CarouselContent className="-ml-4">
          {featuredProducts.map((product, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-[80%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <Card className="rounded-2xl shadow-md hover:shadow-xl transition">
                <CardHeader className="flex flex-col items-center">
                  <div className="w-[180px] h-[120px] overflow-hidden rounded-lg">
                    <Image
                      src={product.imageUrls[0]}
                      alt={product.name}
                      width={180}
                      height={120}
                    />
                  </div>

                  <CardTitle className="text-lg text-center">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-blue-600 font-semibold text-xl text-center">
                    Br {product.price}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <Button
                      onClick={() => {
                        setSelectedLaptop(product);
                        setIsDialogOpen(true);
                      }}
                      className="mt-auto w-full cursor-pointer"
                    >
                      See Details
                    </Button>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
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
    </section>
    
  );
}
