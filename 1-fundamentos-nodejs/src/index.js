const express = require("express");

const app = express();
const port = 3333

app.get("/", (request, response) => {
  return response.json({ message: "Hello World Ignite!" })
})

app.listen(port, () => console.log(`Initialized on http://localhost:${port}`))