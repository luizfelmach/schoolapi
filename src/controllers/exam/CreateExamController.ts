import { Request, Response } from "express";
import { CreateExamUseCase } from "../../usecases/Exam/CreateExamUseCase";

export class CreateExamController {
  constructor(private CreateExam: CreateExamUseCase) {}

  handle = async (request: Request, response: Response): Promise<Response> => {
    const { name } = request.body;
    try {
      await this.CreateExam.execute({
        name,
      });
      return response.status(201).send();
    } catch (error) {
      console.log(error);
      return response.status(400).json({
        message: "Unexpected error",
      });
    }
  };
}
