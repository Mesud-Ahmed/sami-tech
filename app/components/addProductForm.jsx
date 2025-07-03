import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const brands = [
  "Acer", "Apple", "Asus", "Dell", "HP", "Huawei", "Lenovo", "MSI", "Samsung", "Toshiba",
].sort();

const processors = [
  "Intel i3", "Intel i5", "Intel i7", "Intel i9",
  "AMD Ryzen 3", "Ryzen 5", "Ryzen 7", "Ryzen 9",
  "Apple M1", "Apple M2", "Apple M3",
];

const rams = ["4GB", "8GB", "16GB", "32GB", "64GB"];
const storages = ["128GB SSD", "256GB SSD", "512GB SSD", "1TB SSD", "2TB SSD"];
const gpus = ["Integrated", "NVIDIA GTX 1650", "RTX 3050", "RTX 3060", "RTX 3070", "AMD Radeon"];

export default function AddProductForm() {
  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4">Add Laptop Product</h3>
        <form className="space-y-4">
          {/* Name */}
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Laptop name" />
          </div>

          {/* Price */}
          <div className="space-y-1">
            <Label htmlFor="price">Price (ETB)</Label>
            <Input id="price" type="number" placeholder="Price in birr e.g. 80000" />
          </div>

          {/* Brand */}
          <div className="space-y-1">
            <Label>Brand</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select brand" />
              </SelectTrigger>
              <SelectContent>
                {brands.map((b) => (
                  <SelectItem key={b} value={b}>{b}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Processor */}
          <div className="space-y-1">
            <Label>Processor</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select processor" />
              </SelectTrigger>
              <SelectContent>
                {processors.map((p) => (
                  <SelectItem key={p} value={p}>{p}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* RAM */}
          <div className="space-y-1">
            <Label>RAM</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select RAM" />
              </SelectTrigger>
              <SelectContent>
                {rams.map((r) => (
                  <SelectItem key={r} value={r}>{r}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Storage */}
          <div className="space-y-1">
            <Label>Storage</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select storage" />
              </SelectTrigger>
              <SelectContent>
                {storages.map((s) => (
                  <SelectItem key={s} value={s}>{s}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* GPU */}
          <div className="space-y-1">
            <Label>GPU</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select GPU" />
              </SelectTrigger>
              <SelectContent>
                {gpus.map((g) => (
                  <SelectItem key={g} value={g}>{g}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Screen Size */}
          <div className="space-y-1">
            <Label htmlFor="screenSize">Screen Size</Label>
            <Input id="screenSize" placeholder="e.g. 15.6 inch" />
          </div>

          {/* Display Type */}
          <div className="space-y-1">
            <Label htmlFor="display">Display Type</Label>
            <Input id="display" placeholder="e.g. Full HD IPS" />
          </div>

          {/* Battery Life */}
          <div className="space-y-1">
            <Label htmlFor="battery">Battery Life</Label>
            <Input id="battery" placeholder="e.g. 10 hours" />
          </div>

          {/* Weight */}
          <div className="space-y-1">
            <Label htmlFor="weight">Weight</Label>
            <Input id="weight" placeholder="e.g. 1.5 kg" />
          </div>

          {/* Color */}
          <div className="space-y-1">
            <Label htmlFor="color">Color</Label>
            <Input id="color" placeholder="e.g. Silver, Black" />
          </div>

          {/* Warranty */}
          <div className="space-y-1">
            <Label htmlFor="warranty">Warranty</Label>
            <Input id="warranty" placeholder="e.g. 1 year international warranty" />
          </div>

          {/* Image Upload */}
          <div className="space-y-1">
            <Label htmlFor="image">Image</Label>
            <Input id="image" type="file" />
          </div>

          {/* Description */}
          <div className="space-y-1">
            <Label htmlFor="desc">Description</Label>
            <Textarea id="desc" placeholder="Product description" />
          </div>

          <Button type="submit" className="w-full mt-2">
            Add Product
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
