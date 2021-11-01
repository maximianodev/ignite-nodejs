const express = require("express");

const app = express();
const port = 3333

app.get("/", (request, response) => {
  return request.send("OPA")
})

app.listen(port, () => console.log(`Initialized on http://localhost:${port}`))