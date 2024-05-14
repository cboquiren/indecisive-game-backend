/*
  Warnings:

  - You are about to drop the column `genre` on the `Genres` table. All the data in the column will be lost.
  - You are about to drop the column `platform` on the `Platforms` table. All the data in the column will be lost.
  - Added the required column `name` to the `Genres` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Platforms` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Genres" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Genres" ("id") SELECT "id" FROM "Genres";
DROP TABLE "Genres";
ALTER TABLE "new_Genres" RENAME TO "Genres";
CREATE UNIQUE INDEX "Genres_name_key" ON "Genres"("name");
CREATE TABLE "new_Platforms" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Platforms" ("id") SELECT "id" FROM "Platforms";
DROP TABLE "Platforms";
ALTER TABLE "new_Platforms" RENAME TO "Platforms";
CREATE UNIQUE INDEX "Platforms_name_key" ON "Platforms"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
