import { ExamModel } from "../../models";

export interface AddExam {
  add(data: Omit<ExamModel, "id">): Promise<{} | ExamModel>;
}
