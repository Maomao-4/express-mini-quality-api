import request from "supertest"
import app from "../index.js"

describe("GET /health", () => {
  test("debe responder con status 200", async () => {
    const response = await request(app).get("/health")
    expect(response.statusCode).toBe(200)
  })

  test("debe devolver un objeto con la propiedad status", async () => {
    const response = await request(app).get("/health")
    expect(response.body).toHaveProperty("status")
  })

  test('el status debe ser "ok"', async () => {
    const response = await request(app).get("/health")
    expect(response.body.status).toBe("ok")
  })
})
