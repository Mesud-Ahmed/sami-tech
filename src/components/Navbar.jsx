'use client';
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-700">
          Sami Tech
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="admin" className=" hover:text-blue-600">Login</Link>
          <Link href="#contact" className="hover:text-blue-600">Contact</Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none cursor-pointer w-10"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <Link href="/" className="block py-2 hover:text-blue-600">Home</Link>
          <Link href="admin" className="block py-2 hover:text-blue-600">Login</Link>
          <Link href="#contact" className="block py-2 hover:text-blue-600">Contact</Link>
        </div>
      )}
    </nav>
  );
}
