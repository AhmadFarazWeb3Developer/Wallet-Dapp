import { Router } from "express";

const homeRouter = Router();

homeRouter.post("/home", (req, res) => {
  res.status(201).json({
    message: "Home page",
  });
});

export { homeRouter };
