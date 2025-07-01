"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-20 gap-10">
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Discover Your Next <span className="text-blue-600">Laptop</span>
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Shop the latest and greatest laptops for work, play, and everything in between.
        </p>
        <Link href="/products" className="inline-block">
          <Button className="rounded-full px-8 py-4 text-lg shadow-lg">See all Laptops</Button>
        </Link>
      </div>
      <div className="flex-1 flex justify-center">
        <Image
          src="/hero-laptop.png"
          alt="Featured Laptop"
          width={480}
          height={320}
          className="rounded-3xl shadow-2xl object-contain"
          priority
        />
      </div>
    </section>
  )
}
