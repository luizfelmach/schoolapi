import { ExamModel } from "../domain/models";
import { AddExam, LoadExams } from "../domain/rules";
import { prismaClient } from "./prisma-client";

export class ExamRepository implements AddExam, LoadExams {
  async add(data: Omit<ExamModel, "id">): Promise<ExamModel> {
    const { name } = data;
    const exam = await prismaClient.exam.create({
      data: {
        name,
      },
    });
    return exam;
  }

  async load(): Promise<ExamModel[]> {
    const exams = await prismaClient.exam.findMany({
      include: {
        questions: true,
      },
    });
    return exams;
  }
}
