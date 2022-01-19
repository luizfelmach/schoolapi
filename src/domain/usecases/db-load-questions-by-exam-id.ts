import { ExamModel } from "../models";
import { LoadQuestionsByExamId } from "../rules";

export class DbLoadQuestionsByExamId implements LoadQuestionsByExamId {
  constructor(
    private readonly loadQuestionsByExamIdRepository: LoadQuestionsByExamId
  ) {}

  async load(examId: string): Promise<ExamModel[]> {
    return await this.loadQuestionsByExamIdRepository.load(examId);
  }
}
