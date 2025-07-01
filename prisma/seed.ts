import { PrismaClient } from '../app/generated/prisma'

const prisma = new PrismaClient()

const userData = [
  {
    name: 'Sami',
    email: 'sami@prisma.io',
    password: 'hashedpassword1',
  },
  
]

const laptopData = [
  {
    name: 'Dell XPS 13',
    brand: 'Dell',
    processor: 'Intel Core i7',
    ram: 16,
    storage: 512,
    price: 1299.99,
    description: 'Thin and powerful laptop',
    imageUrl: 'https://images-cdn.ubuy.co.in/635db62feaed300587621b54-dell-xps-13-9310-touchscreen-13-4-inch.jpg',
  },
  {
    name: 'MacBook Air M2',
    brand: 'Apple',
    processor: 'Apple M2',
    ram: 8,
    storage: 256,
    price: 1199.99,
    description: 'Sleek Apple laptop with long battery',
    imageUrl: 'https://www.cnet.com/a/img/resize/aba646bbfefdaae2a6aed6d516512f33e3b3a0c9/hub/2022/07/12/995173ef-de01-45be-a714-c5d581f4bd5c/macbook-air-m2-2022-2.jpg?auto=webp&width=1200',
  },
]

async function main() {
  for (const user of userData) {
    await prisma.user.create({ data: user })
  }

  for (const laptop of laptopData) {
    await prisma.laptop.create({ data: laptop })
  }

  console.log('✅ Seeded users and laptops')
}

main()
  
