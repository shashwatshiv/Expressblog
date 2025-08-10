import { Hono } from "hono";
import { getPrisma } from "../prismaFunction";
import { sign } from "hono/jwt";
import { signupInput, signinInput } from "@shashwatshiv/expressblog-common";
export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

//signup

userRouter.post("/signup", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);

  const body = await c.req.json();
  const { success } = signupInput.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({
      error: "Invalid Input ",
    });
  }
  try {
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password,
      },
    });

    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({
      token: token,
      name: user.name,
    });
  } catch (error) {
    c.status(411);
    return c.json({
      error: "Invalid request/ user already exists",
    });
  }
});

//signin

userRouter.post("/signin", async (c) => {
  const body = await c.req.json();

  const prisma = getPrisma(c.env.DATABASE_URL);
  const { success } = signinInput.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({
      error: "Invalid Input ",
    });
  }
  try {
    const user = await prisma.user.findFirst({
      where: { email: body.email, password: body.password },
    });
    // console.log(user);

    if (!user) {
      c.status(403);
      return c.json({
        error: "user not found",
      });
    }
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({
      token: token,
      name: user.name,
    });
  } catch (error) {
    c.status(411);
    return c.json({
      error: "Invalid",
    });
  }
});
