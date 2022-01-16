import { CreateExamController } from "./CreateExamController";
import { ExamRepository } from "../../repositories/Exam/ExamRepository";
import { CreateExamUseCase } from "../../usecases/Exam/CreateExamUseCase";

const examRepository = new ExamRepository();
const createExamUseCase = new CreateExamUseCase(examRepository);
const createExamController = new CreateExamController(createExamUseCase);

export { createExamController };
