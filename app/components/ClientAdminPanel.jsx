"use client";
import { useState } from "react";
import Sidebar from "./sidebar";
import ProductTable from "./productTable";
import AddProductForm from "./addProductForm";

export default function ClientAdminPanel() {
  const [active, setActive] = useState("products");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
          <span className="text-lg font-semibold">Welcome, Admin!</span>
        </header>
        <Sidebar active={active} setActive={setActive} />

        <main className="flex-1 p-6">
          {active === "products" && <ProductTable />}
          {active === "add" && <AddProductForm />}
        </main>
      </div>
    </div>
  );
}
