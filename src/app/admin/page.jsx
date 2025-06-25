'use client';
import Link from "next/link";
import { useState } from "react";

export default function AdminPage() {
  const [products, setProducts] = useState([
    {
      title: "Product 1",
      price: "$10.00",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Product 2",
      price: "$20.00",
      image: "https://via.placeholder.com/150",
    },
  ]);

  const handleEdit = (index) => {
    // redirect or prefill logic here
    console.log("Edit", index);
  };

  const handleDelete = (index) => {
    const updated = products.filter((_, i) => i !== index);
    setProducts(updated);
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">
        Admin Dashboard
      </h1>

      <div className="bg-blue-50 p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold text-gray-800">Welcome, Sami</h2>
        <p className="text-sm text-gray-600 mb-4">Manage your listings from here.</p>
        <Link
          href="/addProduct"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          ➕ Add New Product
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800 mb-1">{product.title}</h2>
              <p className="text-blue-600 font-semibold mb-3">{product.price}</p>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600"
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
