import { ExamModel } from "../models";
import { AddExam } from "../rules";

export class DbAddExam implements AddExam {
  constructor(private readonly AddExamRepository: AddExam) {}

  async add(data: Omit<ExamModel, "id">): Promise<ExamModel> {
    const { name } = data;
    if (!name) {
      throw new Error("Missing parameters");
    }
    return await this.AddExamRepository.add(data);
  }
}
