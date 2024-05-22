import express from "express";
import { User } from "@prisma/client";
import { authRouter } from "./router/authRouter";
import { interactionRouter } from "./router/interactionRouter";
import { gameRouter } from "./router/gamesRouter";
import cors from "cors";

const app = express();

declare global {
  namespace Express {
    interface Request {
      user?: Omit<User, "passwordHash">;
    }
  }
  namespace NodeJS {
    export interface ProcessEnv {
      DATABASE_URL: string;
      JWT_Secret: string;
    }
  }
}

app.use(
  cors({ origin: "http://localhost:5173", methods: ["POST", "GET", "PATCH", "DELETE", "OPTIONS"] })
);
app.use(express.json());

app.use(gameRouter);
app.use(authRouter);
app.use(interactionRouter);

app.get("/auth/login", (req, res) => {
  return req;
});

app.listen(3000);
