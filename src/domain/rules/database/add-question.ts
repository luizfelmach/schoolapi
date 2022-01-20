import { QuestionModel } from "../../models";

export interface AddQuestion {
  add(data: Omit<QuestionModel, "id">): Promise<QuestionModel>;
}
