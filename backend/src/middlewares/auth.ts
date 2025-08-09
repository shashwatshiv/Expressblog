import { sign, verify } from "hono/jwt";
export default async function authMiddleware(c: any, next: any) {
  const jwt = c.req.header("Authorization");
  if (!jwt) {
    c.status(401);
    return c.json({
      error: "Unauthorized Access/ Not Logged In",
    });
  }
  const token = jwt.split(" ")[1];
  const payload = await verify(token, c.env.JWT_SECRET);
  if (!payload) {
    c.status(401);
    return c.json({
      error: "Unauthorized Access/Not Logged In",
    });
  }
  c.set("userId", String(payload.id));
  await next();
}
