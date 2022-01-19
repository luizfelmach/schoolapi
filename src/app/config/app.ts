import express, { Express } from "express";
import { routes } from "./routes";

export const setupApp = async (): Promise<Express> => {
  const app = express();
  routes(app);
  return app;
};
