import { Request, Response, Router } from "express";
import { AddExamController, LoadExamsController } from "../controllers";

export const examRoutes = (router: Router) => {
  router.get("/exams", new LoadExamsController().handle);
  router.post("/exams", new AddExamController().handle);
};
