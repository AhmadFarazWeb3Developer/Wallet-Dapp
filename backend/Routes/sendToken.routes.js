import { Router } from "express";
const sendTokenRouter = Router();
sendTokenRouter.post("/sendToken", (req, res) => {
  res.status(201).json({
    messag: "One step away from token sending",
  });
});

export { sendTokenRouter };
