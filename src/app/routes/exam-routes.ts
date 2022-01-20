import { Request, Response, Router } from "express";
import { AddExamController } from "../controllers/add-exam-controller";

export const examRoutes = (router: Router) => {
  router.post("/exams", new AddExamController().handle);
};
