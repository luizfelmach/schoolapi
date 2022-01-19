import { Express, Router } from "express";
import { examRoutes, questionRoutes } from "../routes";

export const routes = (app: Express) => {
  const router = Router();
  app.use("/api", router);
  examRoutes(router);
  questionRoutes(router);
};
