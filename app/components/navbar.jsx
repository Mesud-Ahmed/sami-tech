"use client"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="Sami-Tech Logo" width={36} height={36} className="rounded" />
        <span className="font-bold text-xl text-blue-700">Sami-Tech</span>
      </div>
      <ul className="flex gap-8 text-gray-700 font-medium">
        <li><a href="#" className="hover:text-blue-600">Home</a></li>
        <li><a href="#" className="hover:text-blue-600">Products</a></li>
        <li><a href="#" className="hover:text-blue-600">Contact</a></li>
        <li><Link href="/admin" className="hover:text-blue-600">Admin</Link></li>
      </ul>
    </nav>
  )
}
