-- AlterTable
ALTER TABLE `useraccesstokens` MODIFY `token` LONGTEXT NOT NULL,
    MODIFY `refreshToken` LONGTEXT NOT NULL;
