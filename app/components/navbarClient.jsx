"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavbarClient({ loggedIn }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={32} height={32} className="rounded" />
          <span className="text-xl font-bold text-blue-700 tracking-tight">Sami-Tech</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center text-sm font-medium text-gray-700">
          <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link href="/products" className="hover:text-blue-600">Products</Link></li>
          <li><Link href="/" className="hover:text-blue-600">Contact</Link></li>
          {loggedIn ? (
            <li>
              <Link href="/admin" className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition">
                Admin
              </Link>
            </li>
          ) : (
            <li>
              <Link href="/login" className="bg-gray-800 text-white px-4 py-1.5 rounded hover:bg-gray-900 transition">
                Login
              </Link>
            </li>
          )}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link href="/products" className="hover:text-blue-600">Products</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
            {loggedIn ? (
              <li>
                <Link href="/admin" className=" bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition">
                  Admin
                </Link>
              </li>
            ) : (
              <li>
                <Link href="/login" className="block bg-gray-800 text-white px-4 py-1.5 rounded hover:bg-gray-900 transition">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
