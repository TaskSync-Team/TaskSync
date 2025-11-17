import request from "supertest";
import app from "../app.js";
import { db } from "../db.js";

beforeAll(async () => { await db.execute("DELETE FROM tasks"); });

afterAll(async () => { await db.end(); });

describe("Tasks API", () => {
  test("Cria tarefa", async () => {
    const res = await request(app).post("/tasks").send({ title: "Teste 1" });
    expect(res.statusCode).toBe(200);
  });

  test("Lista tarefas", async () => {
    const res = await request(app).get("/tasks");
    expect(res.statusCode).toBe(200);
  });
});