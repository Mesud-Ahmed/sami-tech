"use client";

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
                  <a href={`tel:+251941084897`} className="w-full">
                    <Button className="w-full rounded-full">Call to Buy</Button>
                  </a>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
