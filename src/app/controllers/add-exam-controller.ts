import { Request, Response } from "express";
import { ExamRepository } from "../../adapters/exam-repository";
import { DbAddExam } from "../../domain/usecases/db-add-exam";

export class AddExamController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    const dbAddExam = new DbAddExam(new ExamRepository());
    try {
      const exam = await dbAddExam.add({
        name,
      });
      return response.status(201).json(exam);
    } catch (error: any) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }
}
