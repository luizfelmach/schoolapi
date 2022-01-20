import { Request, Response, Router } from "express";
import { AddExamContoller } from "../controllers/add-exam-controller";

export const examRoutes = (router: Router) => {
  router.post("/exams", new AddExamContoller().handle);
};
