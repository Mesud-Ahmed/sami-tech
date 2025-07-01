"use client"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {use} from "react"



export default function FeaturedProducts({products}) {

  const featuredProducts =  use(products)
  console.log("Featured Products:", featuredProducts) 

  return (
    <section className="px-6 md:px-16 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {featuredProducts.map((product) => (
          <Card key={product.name} className="rounded-2xl shadow-md hover:shadow-xl transition">
            <CardHeader className="flex flex-col items-center">
              <Image src={product.imageUrl} alt={product.name} width={180} height={120} className="rounded-xl object-contain mb-2" />
              <CardTitle className="text-lg">{product.name}</CardTitle>
              <CardDescription className="text-blue-600 font-semibold text-xl">{product.price}</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button className="w-full rounded-full">Buy Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
