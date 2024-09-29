import { Router } from "express";
const confirmTransaction = Router();
confirmTransaction.post("/confirmTransation", (req, res) => {
  res.status(201).json({
    messag: "Confirm Transaction",
  });
});

export { confirmTransaction };
