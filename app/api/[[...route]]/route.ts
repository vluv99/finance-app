// import { z } from "zod";
// import { zValidator } from "@hono/zod-validator";

import { Hono } from "hono";
import { handle } from "hono/vercel";
// import { clerkMiddleware, getAuth } from "@hono/clerk-auth";

import authors from "./authors";
import books from "./books";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.route("/authors", authors);
app.route("/books", books);

// Example of authenticated api request - but the file would be really cluttered if all is collected here
// app.get("/hello", clerkMiddleware(), (c) => {
//   const auth = getAuth(c);
//
//   if (!auth?.userId) {
//     return c.json({
//       message: "Unauthrized",
//     });
//   }
//   return c.json({
//     message: "Hello Next.js!",
//     userId: auth.userId,
//   });
// });

export const GET = handle(app);
export const POST = handle(app);
