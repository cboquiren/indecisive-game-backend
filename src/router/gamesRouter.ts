import { Router } from "express";
import { authenticationMiddleware, readDataFromAuthToken } from "../auth-utils";
import { prisma } from "./router-util";
import { validateRequest } from "zod-express-middleware";
import { z } from "zod";

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
  });

  const [, token] = req.headers.authorization?.split(" ") || [];
  const possibleUser = readDataFromAuthToken(token);

  if (!possibleUser) {
    return res.header("Access-Control-Allow-Origin", "*").status(200).json({ games: games });
  }

  const userGames = await prisma.game.findMany({
    where: {
      postedBy: possibleUser.id,
    },
  });

  return res
    .header("Access-Control-Allow-Origin", "*")
    .status(200)
    .json({ games: { ...games, ...userGames } });
});
