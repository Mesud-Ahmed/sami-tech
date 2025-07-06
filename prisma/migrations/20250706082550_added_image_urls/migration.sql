/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Laptop` table. All the data in the column will be lost.
  - Made the column `description` on table `Laptop` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Laptop" DROP COLUMN "imageUrl",
ADD COLUMN     "imageUrls" TEXT[],
ALTER COLUMN "description" SET NOT NULL;
