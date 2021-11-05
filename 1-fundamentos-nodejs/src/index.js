const express = require("express");

const app = express();

app.use(express.json());

const port = 3333;

app.get("/", (request, response) => {
  return response.json({ message: "Hello World Ignite!" });
});

app.get("/courses", (request, response) => {
  const query = request.query;
  console.log("🚀 ~ file: index.js ~ line 12 ~ app.get ~ query", query);
  
  return response.json([
    "Curso 1",
    "Cusro 2",
    "Curso 3"
  ]);
});

app.post("/courses", (request, response) => {
  const body = request.body;
  console.log("🚀 ~ file: index.js ~ line 22 ~ app.post ~ body", body);
  
  return response.json([
    "Curso 1",
    "Cusro 2",
    "Curso 3",
    "Curso 4"
  ]);
});

app.put("/courses/:id", (request, response) => {
  const { id } = request.params;
  console.log("🚀 ~ file: index.js ~ line 35 ~ app.put ~ id", id);

  return response.json([
    "Curso 6",
    "Cusro 2",
    "Curso 3",
    "Curso 4"
  ]);
});

app.patch("/courses/:id", (request, response) => {
  return response.json([
    "Curso 6",
    "Cusro 2",
    "Curso 3",
    "Curso 4"
  ]);
});

app.delete("/courses/:id", (request, response) => {
  return response.json([
    "Curso 6",
    "Cusro 2",
    "Curso 4"
  ]);
});
app.listen(port, () => console.log(`Initialized on http://localhost:${port}`));