import { ExamModel } from "../domain/models";
import { AddExam } from "../domain/rules";
import { prismaClient } from "./prisma-client";

export class ExamRepository implements AddExam {
  async add(data: Omit<ExamModel, "id">): Promise<ExamModel> {
    const { name } = data;
    const exam = await prismaClient.exam.create({
      data: {
        name,
      },
    });
    return exam;
  }
}
