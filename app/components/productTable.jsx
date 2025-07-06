"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Toaster, toast } from "sonner";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ProductTable() {
  const [products, setProducts] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false); // turn off loading
      })
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  const handleDelete = async () => {
    if (!deleteId) return;

    const res = await fetch(`/api/products/${deleteId}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setProducts((prev) => prev.filter((p) => p.id !== deleteId));
      toast.success("Product deleted successfully");
    } else {
      toast.error("Failed to delete product");
    }

    setOpen(false);
    setDeleteId(null);
  };

  const productToDelete = products.find((p) => p.id === deleteId);

  return (
    <>
      <Toaster richColors />
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-4">Products</h3>
          <div className="overflow-x-auto">
            {loading ? (
              <div className="flex justify-center py-10">
                <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <table className="min-w-full text-sm border-t border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2">Image</th>
                    <th className="p-2">Name</th>
                    <th className="p-2">Price</th>
                    <th className="p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p, i) => (
                    <tr key={p.id} className="border-b border-gray-200">
                      <td className="p-2">
                        <Image
                          src={p.imageUrls[0]}
                          width={44}
                          height={44}
                          alt={p.name}
                          className="rounded object-cover"
                        />
                      </td>
                      <td className="p-2 text-center">{p.name}</td>
                      <td className="p-2 text-center">{p.price}</td>
                      <td className="p-2 flex gap-2 justify-center items-center mt-2">
                        <Button size="sm" variant="outline">
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => {
                            setDeleteId(p.id);
                            setOpen(true);
                          }}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </CardContent>
      </Card>

      {/* One global dialog outside table */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Product</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete{" "}
              <span className="font-semibold">{productToDelete?.name}</span>?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button className="cursor-pointer" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button
              className="cursor-pointer"
              variant="destructive"
              onClick={handleDelete}
            >
              Confirm Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
