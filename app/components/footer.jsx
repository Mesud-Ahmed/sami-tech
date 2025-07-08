import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-blue-900 text-blue-50 py-8 px-6 md:px-16 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="font-bold text-lg">LaptopStore</span>
          <p className="text-sm mt-2">
            © {new Date().getFullYear()} LaptopStore. All rights reserved.
          </p>
        </div>
        <ul className="flex gap-6 text-sm">
          <li>
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-blue-600">
              Laptops
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-blue-600">
              Contact
            </Link>
          </li>
        </ul>
        <div className="text-sm">
          Contact:{" "}
          <a href="mailto:info@laptopstore.com" className="underline">
            info@laptopstore.com
          </a>
        </div>

        <div className="text-sm ">
          Made by{" "}
          <a href="https://my-portfolio-kappa-lyart-53.vercel.app/" className="underline color-blue-300 hover:text-blue-400" target="_blank" rel="noopener noreferrer">
            Mesud Ahmed
          </a>
        </div>
      </div>
    </footer>
  );
}
