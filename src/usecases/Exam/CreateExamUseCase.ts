import { IExamRepository } from "../../repositories/Exam/IExamRepository";

interface ICreateExamUseCaseDTO {
  name: string;
}

export class CreateExamUseCase {
  constructor(private ExamRepository: IExamRepository) {}

  async execute(props: ICreateExamUseCaseDTO): Promise<void> {
    const { name } = props;
    if (!name) {
      throw new Error("Missing parameters");
    }
    await this.ExamRepository.create({ name });
  }
}
