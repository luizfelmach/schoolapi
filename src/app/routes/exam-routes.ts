import { Request, Response, Router } from "express";

export const examRoutes = (router: Router) => {
  router.get("/exams", (request: Request, response: Response) =>
    response.json({ ok: "exams" })
  );
};
