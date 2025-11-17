import express from "express";
import tasksRouter from "./tasks.js";

const app = express();
app.use(express.json());
app.use("/tasks", tasksRouter);

export default app;