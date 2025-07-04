-- AlterTable
ALTER TABLE "Laptop" ADD COLUMN     "batteryLife" TEXT,
ADD COLUMN     "color" TEXT,
ADD COLUMN     "displayType" TEXT,
ADD COLUMN     "gpu" TEXT,
ADD COLUMN     "screenSize" TEXT,
ADD COLUMN     "warranty" TEXT,
ADD COLUMN     "weight" TEXT,
ALTER COLUMN "ram" SET DATA TYPE TEXT,
ALTER COLUMN "storage" SET DATA TYPE TEXT;
