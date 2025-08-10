import { Hono } from "hono";
import { getPrisma } from "../prismaFunction";
import { sign, verify } from "hono/jwt";
import {
  createBlogInput,
  updateBlogInput,
} from "@shashwatshiv/expressblog-common";
import authMiddleware from "../middlewares/auth";
export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.get("/bulk", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  let blog = await prisma.blog.findMany({
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });
  blog = blog.reverse();

  return c.json({ blog });
});
// Middleware
blogRouter.use(authMiddleware);
// Routes

//create blog
blogRouter.post("/", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const body = await c.req.json();
  const authorId = Number(c.get("userId"));
  const { success } = createBlogInput.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({
      error: "Invalid Input ",
    });
  }
  try {
    const blog = await prisma.blog.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: authorId,
      },
    });
    return c.json({
      message: "Blog posted",
      Userid: authorId,
      blogId: blog.id,
    });
  } catch (error) {
    c.status(403);
    return c.json({
      error: "Error Posting the Blog",
    });
  }
});

//update blog
blogRouter.put("/", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const body = await c.req.json();
  const { success } = updateBlogInput.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({
      error: "Invalid Input ",
    });
  }
  try {
    const put = await prisma.blog.update({
      where: { id: body.id },
      data: { title: body.title, content: body.content },
    });
    return c.json({ success: "Blog updated" });
  } catch (error) {
    c.status(411);
    return c.json({
      error: "Error updating your blog",
    });
  }
});

blogRouter.get("/:id", async (c) => {
  const blogId = Number(c.req.param("id"));
  const prisma = getPrisma(c.env.DATABASE_URL);
  try {
    const blog = await prisma.blog.findUnique({
      where: {
        id: blogId,
      },
      include: {
        author: { select: { name: true } },
      },
    });
    return c.json({
      blog,
    });
  } catch (error) {
    c.status(404);
    return c.json({
      error: "Blog not found",
    });
  }
});
