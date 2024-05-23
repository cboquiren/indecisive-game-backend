import { Router } from "express";
import { readDataFromAuthToken } from "../auth-utils";
import { prisma } from "./router-util";

export const gameRouter = Router();

gameRouter.get("/games", async (req, res) => {
  const defaultUser = await prisma.user.findFirst({
    where: {
      name: "default",
    },
  });

  if (defaultUser === null) {
    return res.status(404).json({ message: "Could Not Find Default Settings" });
  }

  const games = await prisma.game.findMany({
    where: {
      postedBy: defaultUser.id,
    },
    include: {
      genres: true,
      platforms: true,
      developer: true,
    },
  });

  const token = req.headers.authorization;

  if (token === undefined) {
    return res.status(200).json({ games: games });
  }

  const possibleUser = readDataFromAuthToken(token);

  if (!possibleUser) {
    return res.status(200).json({ games: games });
  }

  const userGames = await prisma.game.findMany({
    where: {
      postedBy: possibleUser.id,
    },
    include: {
      genres: true,
      platforms: true,
      developer: true,
    },
  });

  return res.status(200).json({ games: [...games, ...userGames] });
});
