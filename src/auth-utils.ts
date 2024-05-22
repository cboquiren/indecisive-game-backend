import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import { Request, Response, NextFunction } from "express";
import { prisma } from "./router/router-util";
import jwt from "jsonwebtoken";
import { nan, z } from "zod";

const saltRounds = 11;

export const encryptPassword = (password: string) => {
  return bcrypt.hash(password, saltRounds);
};

const createUnsecuredUserInfo = (user: User) => {
  return { id: user.id, name: user.name };
};

export const createUserToken = (user: User) => {
  return jwt.sign(createUnsecuredUserInfo(user), process.env.JWT_Secret as string);
};

const authTokenSchema = z.object({
  iat: z.number(),
  id: z.number(),
  name: z.string(),
});

export const readDataFromAuthToken = (token?: string) => {
  if (!token) return null;
  try {
    return authTokenSchema.parse(jwt.verify(token, process.env.JWT_Secret as string));
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const authenticationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const [, token] = req.headers.authorization?.split(" ") || [];
  const userJWTData = readDataFromAuthToken(token);
  if (userJWTData === null) {
    return res.status(406).json({ message: "Invalid Token" });
  }
  const userFromJwt = prisma.user.findFirst({
    where: {
      id: userJWTData.id,
    },
  });

  if (!userFromJwt) {
    return res.status(401).json({ message: "User Not Found" });
  }
  (req as any).user = userJWTData;
  next();
};
