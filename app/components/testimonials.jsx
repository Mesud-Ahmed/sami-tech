import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
const testimonials = [
  {
    name: "Jane Doe",
    review: "Absolutely love my new laptop! Fast shipping and amazing customer service.",
    avatar: "/avatars/avatar1.png",
  },
  {
    name: "John Smith",
    review: "The best laptop store online. Great prices and top-notch products.",
    avatar: "/avatars/avatar2.png",
  },
  {
    name: "Emily Chen",
    review: "Highly recommend! The laptop exceeded my expectations.",
    avatar: "/avatars/avatar3.png",
  },
];
export default function Testimonials() {
    return (
        <section className="bg-white py-12 px-6 md:px-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          What Our Customers Say
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {testimonials.map((t) => (
            <Card key={t.name} className="rounded-2xl shadow-md flex-1 max-w-md mx-auto">
              <CardHeader className="flex flex-row items-center gap-4">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="rounded-full border"
                />
                <CardTitle className="text-base">{t.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{t.review}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    );
    }