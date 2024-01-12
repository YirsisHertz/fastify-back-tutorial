import Fastify from "fastify";
import cors from "@fastify/cors";

import { routes } from "./routes/index.js";

const fastify = Fastify({
  logger: true,
});

fastify.register(cors);

fastify.get("/healt", (request, reply) => {
  return {
    message: "Hello world",
  };
});

routes.forEach((route) => {
  fastify.route(route);
});

await fastify.listen({ port: 3000 }); // Top level await
