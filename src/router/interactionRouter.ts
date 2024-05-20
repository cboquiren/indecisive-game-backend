import { Router } from "express";
import { validateRequest } from "zod-express-middleware";
import { z } from "zod";
import { prisma } from "./router-util";
import { authenticationMiddleware } from "../auth-utils";

export const interactionRouter = Router();

interactionRouter.get("/interactions", authenticationMiddleware, async (req, res) => {
  const userInteractions = await prisma.interaction.findMany({
    where: {
      userId: req.user!.id,
    },
  });
  return res.status(200).json({ userInteractions: userInteractions });
});

interactionRouter.post(
  "/interactions",
  validateRequest({
    body: z.object({
      gameId: z.number(),
      type: z.union([
        z.literal("favorite"),
        z.literal("hidden"),
        z.literal("played"),
        z.literal("owned"),
      ]),
    }),
  }),
  authenticationMiddleware,
  async (req, res) => {
    const newInteraction = await prisma.interaction.create({
      data: {
        type: req.body.type,
        gameId: req.body.gameId,
        userId: req.user!.id,
      },
    });
    return res.status(200).json({ message: "Created Interaction" });
  }
);

interactionRouter.delete(
  "/interactions/:interactionId",
  authenticationMiddleware,
  validateRequest({
    params: z.object({
      interactionId: z.string().refine((val) => Number(val)),
    }),
  }),
  async (req, res) => {
    const interactionId = +req.params.interactionId;

    const interaction = await prisma.interaction.findFirst({
      where: {
        id: interactionId,
      },
    });

    if (interaction === null) {
      return res.status(404).json({ message: "Interaction Not Found" });
    }

    const isAuthorized = interaction.userId === req.user!.id;

    if (!isAuthorized) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const deleteInteraction = await prisma.interaction.delete({
      where: {
        id: interactionId,
      },
    });

    return res.status(200).json({ message: "Interaction Deleted" });
  }
);
