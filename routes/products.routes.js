import { getAllProducts } from "../controllers/products/products.controllers.js";

export const ProductRoutes = [
  {
    url: "/products",
    method: "GET",
    handler: getAllProducts,
  },
  {
    url: "/products/:id",
    method: "GET",
    handler: (request, reply) => {
      const { id } = request.params;

      return { id: 1, name: "PC" };
    },
  },
  {
    url: "/products",
    method: "POST",
    handler: (request, reply) => {
      return { data: request.body };
    },
  },
];
