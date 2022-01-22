import { ExamModel } from "../models";
import { LoadExams } from "../rules";

export class DbLoadExams implements LoadExams {
  constructor(private readonly LoadExamsRepository: LoadExams) {}
  load(): Promise<ExamModel[]> {
    return this.LoadExamsRepository.load();
  }
}
