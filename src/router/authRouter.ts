import { Router } from "express";
import { validateRequest } from "zod-express-middleware";
import { z } from "zod";
import { prisma } from "./router-util";
import bcrypt from "bcrypt";
import { createUserToken, encryptPassword } from "../auth-utils";

export const authRouter = Router();

authRouter.post(
  "/auth/login",
  validateRequest({
    body: z.object({
      username: z.string(),
      password: z.string(),
    }),
  }),
  async ({ body: { username: bodyName, password: bodyPassword } }, res) => {
    const user = await prisma.user.findFirst({
      where: {
        name: bodyName,
      },
    });

    if (user === null) {
      return res.status(404).json({ message: "User Not Found" });
    }

    const isPasswordCorrect = await bcrypt.compare(bodyPassword, user.passwordHash);

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const token = createUserToken(user);

    return res.status(200).json({ token: token });
  }
);

authRouter.post(
  "/auth/create-account",
  validateRequest({
    body: z.object({
      username: z.string(),
      password: z.string(),
    }),
  }),
  async (req, res) => {
    const checkExistingUsers = await prisma.user.findFirst({
      where: {
        name: req.body.username,
      },
    });
    if (checkExistingUsers !== null) {
      return res.status(403).json({ message: "Username Already Taken" });
    }
    const newUser = await prisma.user.create({
      data: {
        name: req.body.username,
        passwordHash: await encryptPassword(req.body.password),
      },
    });
    const newUserToken = createUserToken(newUser);
    return res.status(201).json({ token: newUserToken });
  }
);
