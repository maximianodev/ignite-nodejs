const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

const port = 3333;

const customers = [];

app.post("/account", (request, response) => {
  const { cpf, name } = request.body;

  const customerAlreadyExists = customers.some(
    (customer) => customer.cpf === cpf
  );

  if (customerAlreadyExists) {
    return response.status(400).json({ error: "Costumer already exists." });
  }

  customers.push({
    cpf,
    name,
    id: uuidv4(),
    statement: []
  })

  return response.status(201).send("")
})

app.get("/statement/:cpf", (request, response) => {
  const { cpf } = request.params;

  const findClient = customers.find(client => client.cpf === cpf);

  if (findClient) {
    return response.status(201).json(findClient.statement);
  } else {
    return response.status(400).json({ error: "Not exists" });
  }
})

app.listen(port, () => console.log(`\n\n Running on: \n http://localhost:${port} \n\n`));