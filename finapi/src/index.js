const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

const port = 3333;

const customers = [];

// Middleware
function verifyIfExistsAccountCPF(request, response, next) {
  const { cpf } = request.headers;

  const customer = customers.find(client => client.cpf === cpf);

  if (!customer) {
    return response.status(400).json({ error: "Customer not found" });
  }

  request.customer = customer;

  return next();
}

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
  return response.status(201).send("Created!")
});

app.get("/statement", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request;
  
  return response.status(201).json(customer.statement);
})

app.use(verifyIfExistsAccountCPF);

app.listen(port, () => console.log(`\n\n Running on: \n http://localhost:${port} \n\n`));