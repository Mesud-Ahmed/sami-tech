import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import FeaturedProducts from "@/components/featured-products";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";


export default function HomePage() {

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <Footer />
    </div>
  );
}
