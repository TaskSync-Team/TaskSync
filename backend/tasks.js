import express from "express";
import { db } from "./db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const [rows] = await db.execute("SELECT * FROM tasks");
  res.json(rows);
});

router.post("/", async (req, res) => {
  const { title } = req.body;
  await db.execute("INSERT INTO tasks (title, done) VALUES (?, ?)", [ title, false ]);
  res.json({ ok: true });
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  await db.execute("UPDATE tasks SET done = NOT done WHERE id = ?", [id]);
  res.json({ ok: true });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await db.execute("DELETE FROM tasks WHERE id = ?", [id]);
  res.json({ ok: true });
});

export default router;