/*
  Warnings:

  - You are about to drop the column `post` on the `userdata` table. All the data in the column will be lost.
  - The migration will add a unique constraint covering the columns `[email]` on the table `userdata`. If there are existing duplicate values, the migration will fail.

*/
-- AlterTable
ALTER TABLE `userdata` DROP COLUMN `post`;

-- CreateIndex
CREATE UNIQUE INDEX `userdata.email_unique` ON `userdata`(`email`);
