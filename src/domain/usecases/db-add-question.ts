import { QuestionModel } from "../models";
import { AddQuestion } from "../rules";

export class DbAddQuestion implements AddQuestion {
  constructor(private readonly AddQuestionRepository: AddQuestion) {}

  async add(data: Omit<QuestionModel, "id">): Promise<QuestionModel> {
    const { question, answer, examId } = data;
    if (!question || !answer || !examId) {
      throw new Error("Missing parameters");
    }
    return await this.AddQuestionRepository.add(data);
  }
}
