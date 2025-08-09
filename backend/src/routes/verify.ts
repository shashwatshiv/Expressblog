import { sign, verify } from "hono/jwt";
import { Hono } from "hono";
import authMiddleware from "../middlewares/auth";
export const verifyRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();
verifyRouter.use(authMiddleware);
verifyRouter.get("/", async (c) => {
  return c.json({
    validUser: true,
  });
});
