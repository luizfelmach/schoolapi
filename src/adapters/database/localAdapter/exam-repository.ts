import { ExamModel } from "../../../domain/models";
import { AddExam } from "../../../domain/rules";

export class ExamRepository implements AddExam {
  async add(data: Omit<ExamModel, "id">): Promise<{} | ExamModel> {
    const exam = { ...data, id: "ID UNIVERSAL" };
    console.log("ADD EXAM");
    return exam;
  }
}
