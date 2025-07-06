"use client"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from 'react';


export default function FeaturedProducts({products}) {

    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
      fetch('/api/products')
        .then((res) => res.json())
        .then((data) => setFeaturedProducts(data));
    }, []);
  
 
  return (
    <section className="px-6 md:px-16 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {featuredProducts.map((product) => (
          <Card key={product.name} className="rounded-2xl shadow-md hover:shadow-xl transition">
            <CardHeader className="flex flex-col items-center">
              <Image src={product.imageUrls[0]} alt={product.name} width={180} height={120} className=" object-contain mb-2" />
              <CardTitle className="text-lg">{product.name}</CardTitle>
              <CardDescription className="text-blue-600 font-semibold text-xl">{product.price}</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <a href={`tel:+251941084897`} className="w-full">
                <Button className="w-full rounded-full">Call to Buy</Button>
              </a>
              
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
