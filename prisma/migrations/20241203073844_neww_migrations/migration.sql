/*
  Warnings:

  - You are about to drop the column `tourId` on the `Booking` table. All the data in the column will be lost.
  - The `status` column on the `Booking` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `Payment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Tour` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `endDate` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `headCount` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `returnFlight` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'COMPLETED', 'FAILED');

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_tourId_fkey";

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "tourId",
ADD COLUMN     "adminResponse" TEXT,
ADD COLUMN     "amount" DOUBLE PRECISION,
ADD COLUMN     "customLocation" TEXT,
ADD COLUMN     "destinationId" TEXT,
ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "headCount" INTEGER NOT NULL,
ADD COLUMN     "personalized" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "returnFlight" BOOLEAN NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "User" DROP COLUMN "role";

-- DropTable
DROP TABLE "Tour";

-- DropEnum
DROP TYPE "UserRole";

-- DropEnum
DROP TYPE "status";

-- CreateTable
CREATE TABLE "Destination" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" JSONB NOT NULL,
    "location" TEXT NOT NULL,
    "headCountMin" INTEGER NOT NULL,
    "headCountMax" INTEGER NOT NULL,
    "durationLimit" INTEGER NOT NULL,
    "amountPerHead" DOUBLE PRECISION NOT NULL,
    "hasReturnFlight" BOOLEAN NOT NULL DEFAULT false,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Destination_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "Destination"("id") ON DELETE SET NULL ON UPDATE CASCADE;
