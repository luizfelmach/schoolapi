import { Request, Response, Router } from "express";

export const questionRoutes = (router: Router) => {
  router.get("/questions", (request: Request, response: Response) =>
    response.json({ ok: "questions" })
  );
};
