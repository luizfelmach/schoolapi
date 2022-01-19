import { ExamModel } from "../../models";

export interface LoadQuestionsByExamId {
  load(examId: string): Promise<ExamModel[]>;
}
