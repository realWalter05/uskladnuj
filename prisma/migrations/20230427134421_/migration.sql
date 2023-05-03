/*
  Warnings:

  - You are about to drop the `Package` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Package";

-- CreateTable
CREATE TABLE "delivery" (
    "id_delivery" TEXT NOT NULL,
    "id_user" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "fragile" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "delivery_pkey" PRIMARY KEY ("id_delivery")
);
