/*
  Warnings:

  - You are about to drop the `GameGenres` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GamePlatforms` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Developer` will be added. If there are existing duplicate values, this will fail.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "GameGenres";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "GamePlatforms";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "_GameToGenres" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_GameToGenres_A_fkey" FOREIGN KEY ("A") REFERENCES "Game" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_GameToGenres_B_fkey" FOREIGN KEY ("B") REFERENCES "Genres" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_GameToPlatforms" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_GameToPlatforms_A_fkey" FOREIGN KEY ("A") REFERENCES "Game" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_GameToPlatforms_B_fkey" FOREIGN KEY ("B") REFERENCES "Platforms" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_GameToGenres_AB_unique" ON "_GameToGenres"("A", "B");

-- CreateIndex
CREATE INDEX "_GameToGenres_B_index" ON "_GameToGenres"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_GameToPlatforms_AB_unique" ON "_GameToPlatforms"("A", "B");

-- CreateIndex
CREATE INDEX "_GameToPlatforms_B_index" ON "_GameToPlatforms"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Developer_name_key" ON "Developer"("name");
