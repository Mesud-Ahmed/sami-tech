
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // simple check for cookie
    setIsLoggedIn(document.cookie.includes("session"));
  }, []);

  return (
    <nav >
      <ul className="flex gap-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/products">Products</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        {isLoggedIn ? (
          
            <li><Link href="/admin">Admin</Link></li>
            
          
        ) : (
          <li><Link href="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
}
