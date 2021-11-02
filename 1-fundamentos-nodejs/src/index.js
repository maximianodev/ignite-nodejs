const express = require("express");

const app = express();
const port = 3333

app.get("/", (request, response) => {
  return response.json({ message: "Hello World Ignite!" })
})

app.get("/courses", (request, response) => {
  return response.json([
    "Curso 1",
    "Cusro 2",
    "Curso 3"
  ])
})

app.post("/courses", (request, response) => {
  return response.json([
    "Curso 1",
    "Cusro 2",
    "Curso 3",
    "Curso 4"
  ])
})

app.put("/courses/:id", (request, response) => {
  return response.json([
    "Curso 6",
    "Cusro 2",
    "Curso 3",
    "Curso 4"
  ])
})

app.patch("/courses/:id", (request, response) => {
  return response.json([
    "Curso 6",
    "Cusro 2",
    "Curso 3",
    "Curso 4"
  ])
})

app.delete("/courses/:id", (request, response) => {
  return response.json([
    "Curso 6",
    "Cusro 2",
    "Curso 4"
  ])
})
app.listen(port, () => console.log(`Initialized on http://localhost:${port}`))