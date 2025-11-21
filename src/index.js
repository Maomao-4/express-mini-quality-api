const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

const users = [
  { id: 1, name: 'Ana' },
  { id: 2, name: 'Luis' },
  { id: 3, name: 'Carlos' },
];

app.get('/users', (req, res) => {
  res.status(200).json(users);
});

app.post('/math/sum', (req, res) => {
  const { a, b } = req.body;

  if (a === undefined || b === undefined) {
    return res.status(400).json({
      error: 'Faltan parámetros requeridos: a y b',
    });
  }

  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({
      error: 'Los parámetros a y b deben ser números',
    });
  }

  const result = a + b;
  return res.status(200).json({ result });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}

module.exports = app;
