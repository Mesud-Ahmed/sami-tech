'use client'
import { Button } from "@/components/ui/button"

const navLinks = [
  
  { key: "products", label: "Products" },
  { key: "add", label: "Add Product" },
]

export default function Sidebar({ active, setActive }) {
  return (
    <aside className="w-full mt-2 bg-white shadow-md flex justify-center items-center p-6">

      <nav className="flex justify-between text-center gap-2">
        {navLinks.map((link) => (
          <Button
            key={link.key}
            variant={active === link.key ? "default" : "ghost"}
            className="cursor-pointer"
            onClick={() => setActive(link.key)}
          >
            {link.label}
          </Button>
        ))}
      </nav>
    </aside>
  )
}
