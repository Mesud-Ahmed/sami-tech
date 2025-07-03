import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const brands = ["HP", "Dell", "Lenovo", "Apple"]
const processors = ["i5", "i7", "M1"]
const rams = ["8GB", "16GB", "32GB"]
const storages = ["256GB SSD", "512GB SSD", "1TB SSD"]

export default function AddProductForm() {
  return (
    <Card className="max-w-xl mx-auto">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4">Add Product</h3>
        <form className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Laptop name" />
          </div>
          <div>
            <Label htmlFor="price">Price</Label>
            <Input id="price" type="number" placeholder="Price in birr eg. 80000" />
          </div>
          <div>
            <Label>Brand</Label>
            <Select>
              <SelectTrigger><SelectValue placeholder="Select brand" /></SelectTrigger>
              <SelectContent>{brands.map(b => <SelectItem key={b} value={b}>{b}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div>
            <Label>Processor</Label>
            <Select>
              <SelectTrigger><SelectValue placeholder="Select processor" /></SelectTrigger>
              <SelectContent>{processors.map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div>
            <Label>RAM</Label>
            <Select>
              <SelectTrigger><SelectValue placeholder="Select RAM" /></SelectTrigger>
              <SelectContent>{rams.map(r => <SelectItem key={r} value={r}>{r}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div>
            <Label>Storage</Label>
            <Select>
              <SelectTrigger><SelectValue placeholder="Select storage" /></SelectTrigger>
              <SelectContent>{storages.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="image">Image</Label>
            <Input id="image" type="file" />
          </div>
          <div>
            <Label htmlFor="desc">Description</Label>
            <Textarea id="desc" placeholder="Product description" />
          </div>
          <Button type="submit" className="w-full mt-2">Add Product</Button>
        </form>
      </CardContent>
    </Card>
  )
}
