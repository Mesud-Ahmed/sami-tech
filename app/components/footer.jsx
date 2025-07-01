export default function Footer() {
  return (
    <footer className="bg-blue-900 text-blue-50 py-8 px-6 md:px-16 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="font-bold text-lg">LaptopStore</span>
          <p className="text-sm mt-2">© {new Date().getFullYear()} LaptopStore. All rights reserved.</p>
        </div>
        <ul className="flex gap-6 text-sm">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">Products</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
          <li><a href="#" className="hover:underline">Login</a></li>
        </ul>
        <div className="text-sm">
          Contact: <a href="mailto:info@laptopstore.com" className="underline">info@laptopstore.com</a>
        </div>
      </div>
    </footer>
  )
}
