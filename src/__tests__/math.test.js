import request from "supertest"
import app from "../index.js"

describe("POST /math/sum", () => {
  test("debe sumar correctamente dos números positivos", async () => {
    const response = await request(app).post("/math/sum").send({ a: 5, b: 3 })

    expect(response.statusCode).toBe(200)
    expect(response.body.result).toBe(8)
  })

  test("debe manejar números negativos", async () => {
    const response = await request(app).post("/math/sum").send({ a: -5, b: 3 })

    expect(response.statusCode).toBe(200)
    expect(response.body.result).toBe(-2)
  })

  test("debe manejar el cero", async () => {
    const response = await request(app).post("/math/sum").send({ a: 0, b: 0 })

    expect(response.statusCode).toBe(200)
    expect(response.body.result).toBe(0)
  })

  test("debe manejar números decimales", async () => {
    const response = await request(app).post("/math/sum").send({ a: 1.5, b: 2.5 })

    expect(response.statusCode).toBe(200)
    expect(response.body.result).toBe(4)
  })

  test("debe devolver error 400 si falta el parámetro a", async () => {
    const response = await request(app).post("/math/sum").send({ b: 3 })

    expect(response.statusCode).toBe(400)
    expect(response.body).toHaveProperty("error")
  })

  test("debe devolver error 400 si falta el parámetro b", async () => {
    const response = await request(app).post("/math/sum").send({ a: 5 })

    expect(response.statusCode).toBe(400)
    expect(response.body).toHaveProperty("error")
  })

  test("debe devolver error 400 si a no es un número", async () => {
    const response = await request(app).post("/math/sum").send({ a: "texto", b: 3 })

    expect(response.statusCode).toBe(400)
    expect(response.body).toHaveProperty("error")
  })

  test("debe devolver error 400 si b no es un número", async () => {
    const response = await request(app).post("/math/sum").send({ a: 5, b: "texto" })

    expect(response.statusCode).toBe(400)
    expect(response.body).toHaveProperty("error")
  })

  test("debe devolver error 400 si ambos parámetros son inválidos", async () => {
    const response = await request(app).post("/math/sum").send({ a: null, b: undefined })

    expect(response.statusCode).toBe(400)
    expect(response.body).toHaveProperty("error")
  })
})
