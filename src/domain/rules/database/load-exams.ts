import { ExamModel } from "../../models";

export interface LoadExams {
  load(): Promise<ExamModel[]>;
}
