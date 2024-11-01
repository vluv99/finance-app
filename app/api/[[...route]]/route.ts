import { z } from "zod";
import { zValidator } from "@hono/zod-validator";

import { Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app
  .get("/hello", (c) => {
    return c.json({
      message: "Hello Next.js!",
    });
  })
  .get(
    "/hello/:test",
    zValidator(
      "param",
      z.object({
        test: z.string(),
      }),
    ),
    (c) => {
      const { test } = c.req.valid("param");
      return c.json({
        message: "Hello World",
        test: test,
      });
    },
  )
  .post(
    "/",
    zValidator(
      "json",
      z.object({
        name: z.string(),
        userId: z.string(),
      }),
    ),
    (c) => {
      const { name, userId } = c.req.valid("json");
      return c.json({
        name: name,
        userId: userId,
      });
    },
  );

export const GET = handle(app);
export const POST = handle(app);
