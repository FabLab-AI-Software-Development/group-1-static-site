/*
  Warnings:

  - Added the required column `product_type` to the `Hat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Hat" ADD COLUMN     "product_type" TEXT NOT NULL;
