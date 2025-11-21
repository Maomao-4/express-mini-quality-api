import express from "express"

const app = express()
const PORT = process.env.PORT || 3000

// Middleware para parsear JSON
app.use(express.json())

// Endpoint GET /health
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" })
})

// Datos en memoria para /users
const users = [
  { id: 1, name: "Ana" },
  { id: 2, name: "Luis" },
  { id: 3, name: "Carlos" },
]

// Endpoint GET /users
app.get("/users", (req, res) => {
  res.status(200).json(users)
})

// Endpoint POST /math/sum
app.post("/math/sum", (req, res) => {
  const { a, b } = req.body

  // Validaciones
  if (a === undefined || b === undefined) {
    return res.status(400).json({
      error: "Faltan parámetros requeridos: a y b",
    })
  }

  if (typeof a !== "number" || typeof b !== "number") {
    return res.status(400).json({
      error: "Los parámetros a y b deben ser números",
    })
  }

  // Cálculo de la suma
  const result = a + b
  res.status(200).json({ result })
})

// Iniciar servidor solo si no estamos en entorno de pruebas
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
  })
}

export default app
