import { PrismaClient } from "@prisma/client";
import { seedData } from "./seed-data";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const clearDb = async () => {
  await prisma.user.deleteMany();
  await prisma.developer.deleteMany();
  await prisma.game.deleteMany();
  await prisma.interaction.deleteMany();
  await prisma.genres.deleteMany();
  await prisma.platforms.deleteMany();
};

const seed = async () => {
  console.log("Seeding the database...");
  await clearDb();

  /* Create Platforms */
  const createPlatforms = await prisma.platforms.createMany({
    data: seedData.platformsList.map((platformName) => {
      return { name: platformName };
    }),
  });

  /* Create Developers */
  const createDevelopers = await prisma.developer.createMany({
    data: seedData.developersList.map((developer) => {
      return { name: developer };
    }),
  });

  /* Create Genres */
  const createGenres = await prisma.genres.createMany({
    data: seedData.genresList.map((genreName) => {
      return { name: genreName };
    }),
  });

  /* Create Users */
  const defaultUser = await prisma.user.create({
    data: {
      name: "Default",
      passwordHash: await bcrypt.hash("default", 11),
    },
  });

  const kuya = await prisma.user.create({
    data: {
      name: "kuya",
      passwordHash: await bcrypt.hash("password", 11),
    },
  });

  const carl = await prisma.user.create({
    data: {
      name: "carl",
      passwordHash: await bcrypt.hash("test", 11),
    },
  });

  /* Create Games */
  const developerObjects = await prisma.developer.findMany();

  const createGames = await prisma.game.createMany({
    data: seedData.gamesList.map((game) => {
      const devId = developerObjects.find((dev) => dev.name === game.developer);
      if (devId === undefined) {
        throw new Error("Could not find developer");
      }
      return {
        name: game.name,
        description: game.description,
        image: game.image,
        postedBy: defaultUser.id,
        developerId: devId.id,
      };
    }),
  });

  /* Create Interactions */
  const gameObjects = await prisma.game.findMany({
    select: {
      name: true,
      id: true,
    },
  });

  const createInteractions = await prisma.interaction.createMany({
    data: seedData.interactionsList.map((interaction) => {
      const gameId = gameObjects.find((game) => game.name === interaction.game);
      if (gameId === undefined) {
        throw new Error("Could not find game");
      }
      return {
        type: interaction.type,
        userId: kuya.id,
        gameId: gameId.id,
      };
    }),
  });
};

seed()
  .then(() => {
    console.log("Seeding Complete");
  })
  .catch((e) => {
    console.log(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
