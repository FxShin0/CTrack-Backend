-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'MODERATOR', 'ADMIN');

-- AlterTable
ALTER TABLE "app_user" ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'USER';
