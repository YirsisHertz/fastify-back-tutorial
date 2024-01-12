import { ProductRoutes } from "./products.routes.js";
import { UsersRoutes } from "./users.routes.js";

export const routes = [...ProductRoutes, ...UsersRoutes];
