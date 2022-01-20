import express, { Express, json } from "express";
import { routes } from "./routes";

export const setupApp = async (): Promise<Express> => {
  const app = express();
  app.use(json());
  routes(app);
  return app;
};
