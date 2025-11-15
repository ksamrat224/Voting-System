/*
  Warnings:

  - You are about to drop the column `text` on the `poll_options` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `poll_options` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `polls` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `poll_options` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "poll_options" DROP COLUMN "text",
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "poll_options_name_key" ON "poll_options"("name");

-- CreateIndex
CREATE UNIQUE INDEX "polls_title_key" ON "polls"("title");
