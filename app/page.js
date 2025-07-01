import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import FeaturedProducts from "@/components/featured-products"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"
import { Suspense } from 'react'
import { getLaptops } from "lib/db"

export default function HomePage() {
  const laptopsPromise = getLaptops();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="text-center py-8">Loading laptops...</div>}>
        <FeaturedProducts products={laptopsPromise} />
      </Suspense>
      <Testimonials />
      <Footer />
    </div>
  )
}
