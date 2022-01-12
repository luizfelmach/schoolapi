import { Request, Response } from "express";
import { validate as uuidValidate } from "uuid";
import Exam from "../models/Exam";

class ExamController {
  async view(req: Request, res: Response) {
    try {
      const { id } = req.body;

      const isUuid = uuidValidate(id);

      if (!isUuid) {
        return res.status(400).json({
          message: "Missing or invalid parameters.",
        });
      }

      const exam = await Exam.findByPk(id);

      exam ? res.json(exam) : res.status(204).json({});
    } catch (e) {
      console.log(e);
      res.status(500).send({
        message: "Internal server error.",
      });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { name } = req.body;

      if (!name) {
        return res.status(400).json({
          message: "Missing or invalid parameters.",
        });
      }

      const exam = await Exam.create({ name });
      return res.status(201).json(exam);
    } catch (e) {
      console.log(e);
      res.status(500).send({
        message: "Internal server error.",
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id, name } = req.body;

      const isUuid = uuidValidate(id);

      if (!name || !isUuid) {
        return res.status(400).json({
          message: "Missing or invalid parameters.",
        });
      }

      const exam = await Exam.findByPk(id);

      if (!exam) {
        return res.status(400).json({
          message: "Missing or invalid parameters.",
        });
      }

      const updatedExam = await exam.update({ name });
      res.json(updatedExam);
    } catch (e) {
      console.log(e);
      res.status(500).send({
        message: "Internal server error.",
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.body;

      const isUuid = uuidValidate(id);

      if (!isUuid) {
        return res.status(400).json({
          message: "Missing or invalid parameters.",
        });
      }

      const exam = await Exam.destroy({
        where: {
          id,
        },
      });
      res.json({});
    } catch (e) {
      console.log(e);
      res.status(500).send({
        message: "Internal server error.",
      });
    }
  }
}
export default new ExamController();
