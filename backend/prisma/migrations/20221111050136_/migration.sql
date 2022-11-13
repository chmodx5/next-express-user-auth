/*
  Warnings:

  - You are about to drop the column `captionText` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `hobbies` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `images` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `jobTitle` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `user` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Profile_captionText_key` ON `profile`;

-- AlterTable
ALTER TABLE `profile` DROP COLUMN `captionText`,
    DROP COLUMN `hobbies`,
    DROP COLUMN `images`,
    DROP COLUMN `jobTitle`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `first_name`,
    DROP COLUMN `last_name`;
