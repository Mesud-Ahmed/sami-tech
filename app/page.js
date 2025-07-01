"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";




const featuredProducts = [
  {
    name: "UltraBook Pro 15",
    price: "$1,499",
    image: "/laptops/laptop1.jpg",
  },
  {
    name: "Gaming Beast X9",
    price: "$2,199",
    image: "/laptops/laptop2.jpg",
  },
  {
    name: "SlimBook Air 13",
    price: "$999",
    image: "/laptops/laptop3.jpg",
  },
  {
    name: "WorkMate 14",
    price: "$1,199",
    image: "/laptops/laptop4.jpg",
  },
];

const testimonials = [
  {
    name: "Jane Doe",
    review: "Absolutely love my new laptop! Fast shipping and amazing customer service.",
    avatar: "/avatars/avatar1.png",
  },
  {
    name: "John Smith",
    review: "The best laptop store online. Great prices and top-notch products.",
    avatar: "/avatars/avatar2.png",
  },
  {
    name: "Emily Chen",
    review: "Highly recommend! The laptop exceeded my expectations.",
    avatar: "/avatars/avatar3.png",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-sm py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Sami-Tech Logo" width={36} height={36} className="rounded" />
          <span className="font-bold text-xl text-blue-700">Sami-Tech</span>
        </div>
        
        <ul className="flex gap-8 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-blue-600 transition">Home</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">Products</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">Contact</a></li>
          <li><Link href="/admin" className="hover:text-blue-600 transition">Admin</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-20 gap-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Discover Your Next <span className="text-blue-600">Laptop</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Shop the latest and greatest laptops for work, play, and everything in between.
          </p>
          <Link href="/products" className="inline-block">
            <Button className="cursor-pointer rounded-full px-8 py-4 text-lg shadow-lg">
              See all Laptops
            </Button>
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

      {/* Featured Products */}
      <section className="px-6 md:px-16 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product.name} className="rounded-2xl shadow-md hover:shadow-xl transition">
              <CardHeader className="flex flex-col items-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={180}
                  height={120}
                  className="rounded-xl object-contain mb-2"
                />
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

      {/* Testimonials */}
      <section className="bg-white py-12 px-6 md:px-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          What Our Customers Say
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {testimonials.map((t) => (
            <Card key={t.name} className="rounded-2xl shadow-md flex-1 max-w-md mx-auto">
              <CardHeader className="flex flex-row items-center gap-4">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="rounded-full border"
                />
                <CardTitle className="text-base">{t.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{t.review}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-blue-50 py-8 px-6 md:px-16 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="font-bold text-lg">LaptopStore</span>
            <p className="text-sm mt-2">© {new Date().getFullYear()} LaptopStore. All rights reserved.</p>
          </div>
          <ul className="flex gap-6 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Products</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Login</a></li>
          </ul>
          <div className="text-sm">
            Contact: <a href="mailto:info@laptopstore.com" className="underline">info@laptopstore.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}