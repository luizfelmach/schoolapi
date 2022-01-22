import { Request, Response } from "express";
import { ExamRepository } from "../../adapters/exam-repository";
import { DbLoadExams } from "../../domain/usecases/db-load-exams";

export class LoadExamsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const dbLoadExams = new DbLoadExams(new ExamRepository());
    try {
      const exams = await dbLoadExams.load();
      return response.status(201).json(exams);
    } catch (error: any) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }
}
