import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <>
      <Head>
        <title>Sami Tech</title>
        <meta name="description" content="Affordable Laptops for Everyone" />
      </Head>
      <Navbar />
      <main className="bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="bg-white py-20 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
            Find Your Perfect Laptop
          </h1>
          <p className="mt-4 text-lg max-w-xl mx-auto">
            Discover top-brand laptops at unbeatable prices. Fast delivery,
            trusted service.
          </p>
          <a
            href="#products"
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Browse Laptops
          </a>
        </section>

        <section className="py-16 bg-blue-50 text-center">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            <div>
              <h3 className="text-xl font-semibold">Affordable Prices</h3>
              <p className="mt-2 text-sm">
                Get premium laptops at great deals.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Fast Delivery</h3>
              <p className="mt-2 text-sm">
                We deliver anywhere in 24-72 hours.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Genuine Products</h3>
              <p className="mt-2 text-sm">Trusted brands with warranty.</p>
            </div>
          </div>
        </section>

        <section id="products" className="py-16 px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Featured Laptops
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Dell Inspiron 15",
                image: "/laptops/dell.png",
                price: "$599",
              },
              {
                title: "MacBook Air M1",
                image: "/laptops/macbook.png",
                price: "$999",
              },
              {
                title: "HP Pavilion",
                image: "/laptops/hp.png",
                price: "$499",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
              >
                <Image
                  width={300}
                  height={200}
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="text-blue-600 font-bold">{product.price}</p>
                  <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 text-center bg-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Buy?</h2>
          <p className="mb-6">Call us or send a message to place your order!</p>
          <a
            href="https://wa.me/251912345678"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Message on WhatsApp
          </a>
        </section>

        <footer className="bg-gray-100 py-6 text-center text-sm">
          &copy; {new Date().getFullYear()} Sami Tech. All rights reserved.
        </footer>
      </main>
    </>
  );
}
