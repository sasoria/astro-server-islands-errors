import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { cors } from "hono/cors";
import { HTTPException } from 'hono/http-exception';

const api = new Hono();

api.use("/*", cors({
  origin: "http://localhost:4321",
  credentials: true,
}));

api.get('/error', (c) => {
  throw new HTTPException(502, { message: 'This is an error' });
});

serve(api);
