/*
  Warnings:

  - You are about to drop the column `lastNane` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "lastNane",
ADD COLUMN     "lastName" TEXT;
