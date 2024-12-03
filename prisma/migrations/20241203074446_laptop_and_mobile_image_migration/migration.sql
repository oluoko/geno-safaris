/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Destination` table. All the data in the column will be lost.
  - Added the required column `laptopImageUrl` to the `Destination` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mobileImageUrl` to the `Destination` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Destination" DROP COLUMN "imageUrl",
ADD COLUMN     "laptopImageUrl" TEXT NOT NULL,
ADD COLUMN     "mobileImageUrl" TEXT NOT NULL;
