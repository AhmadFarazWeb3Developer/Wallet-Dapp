import express from "express";
import { homeRouter } from "./Routes/home.routes.js";
import { sendTokenRouter } from "./Routes/sendToken.routes.js";
import { confirmTransaction } from "./Routes/confirmTransaction.routes.js";

const app = express();
const PORT = 8000;

app.use("/api", homeRouter);
app.use("/api", confirmTransaction);
app.use("/api", sendTokenRouter);

app.listen(PORT || 5000, (res, req) => {
  console.log("App is listening to port", PORT);
});
