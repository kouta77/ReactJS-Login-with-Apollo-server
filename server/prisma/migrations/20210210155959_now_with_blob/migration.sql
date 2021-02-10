/*
  Warnings:

  - Made the column `avatar` on table `userdata` required. The migration will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `userdata` MODIFY `avatar` MEDIUMBLOB NOT NULL;
