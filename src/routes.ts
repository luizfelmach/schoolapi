import { Router } from "express";
import { createExamController } from "./controllers/exam";
const router = Router();

router.post("/exams", createExamController.handle);

export { router };
