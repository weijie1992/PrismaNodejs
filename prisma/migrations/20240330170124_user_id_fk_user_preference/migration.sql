/*
  Warnings:

  - You are about to drop the column `userId` on the `UserPreference` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userPreferenceid]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "UserPreference" DROP CONSTRAINT "UserPreference_userId_fkey";

-- DropIndex
DROP INDEX "UserPreference_userId_key";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "userPreferenceid" TEXT;

-- AlterTable
ALTER TABLE "UserPreference" DROP COLUMN "userId";

-- CreateIndex
CREATE UNIQUE INDEX "User_userPreferenceid_key" ON "User"("userPreferenceid");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userPreferenceid_fkey" FOREIGN KEY ("userPreferenceid") REFERENCES "UserPreference"("id") ON DELETE SET NULL ON UPDATE CASCADE;
