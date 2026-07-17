/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `app_user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `app_user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "app_user" ADD COLUMN     "email" VARCHAR(255) NOT NULL,
ADD COLUMN     "verified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "verifyCode" CHAR(6);

-- CreateIndex
CREATE UNIQUE INDEX "app_user_email_key" ON "app_user"("email");
