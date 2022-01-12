import { Router } from "express";
import ExamController from "./controllers/ExamController";

const routes = Router();

routes.get("/exam", ExamController.view);
routes.post("/exam", ExamController.create);
routes.put("/exam", ExamController.update);
routes.delete("/exam", ExamController.delete);

export { routes };
