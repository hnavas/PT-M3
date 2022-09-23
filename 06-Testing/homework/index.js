const express = require('express');
const {sumArray, pluck} = require('./utils');
const app = express();

app.use(express.json()); // for parsing application/json

app.get('/', (req, res) => {
  res.send({
    message: 'hola',
  });
});

app.get('/test', (req, res) => {
  res.send({
    message: 'hola',
  });
});

app.post('/sum', (req, res) => {
  res.send({result: req.body.a + req.body.b});
});

app.post('/product', (req, res) => {
  const {a, b} = req.body;
  res.send({
    result: a * b
  });
});

app.post('/sumArray', (req, res) => {
  const {array, num} = req.body;
  const result = sumArray(array, num);
  res.json({
    result
  });
});

app.get('/numString', (req, res) => {
  const {q} = req.query;
  if(!q || !isNaN(Number(q))) return res.sendStatus(400);
  res.json({
    result: q.length
  });
});

app.post('/pluck', (req, res) => {
  const {array, prop} = req.body;
  if(!array || !prop) return res.sendStatus(400);
  const result = pluck(array, prop);
  res.json({
    result
  })
});

module.exports = app; // Exportamos app para que supertest session la pueda ejecutar
