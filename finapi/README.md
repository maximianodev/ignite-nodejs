# FinApi - Financeia

Uma API financeira de nivel iniciante feita no Módulo 2 do OmniStack de NodeJS da Rocketseat.

### Routes

-   POST `/account` - Passando `cpf` e `nome` no body para criar uma nova conta.
-   PUT `/account` - Passando `cpf` no header e `nome` no body para atualizar uma nome de uma conta.
-   GET `/account` - Passando `cpf` no header para listar as contas existentes.
-   DELETE `/account` - Passando `cpf` no header para deletar uma conta.

-   GET `/statement` - Passando `cpf` no header params para mostar o extrato financeiro.
-   GET `/statement/date` - Passando `date` no body e `cpf` no header para fazer uma busca por data. **Importante frizar que a data tem que ser no seguinte formato `ano-mes-dia` exemplo `2021-11-18`**.

-   POST `/deposit` - Passando `description` e `amount` no body e `cpf` no header para fazer um deposito.

-   POST `/withdraw` - Passando `amount` no body e `cpf` no header para fazer um saque.
-   POST `/withdraw` - Passando `amount` no body e `cpf` no header para fazer um saque.

-   GET `/balance` - Passando `cpf` no header para pegar o balanço geral de uma conta.

---

### Requisitos

-   [x] Deve ser possível criar uma conta;
-   [x] Deve ser possível buscar o extrato bancário do cliente;
-   [x] Deve ser possível realizar um depósito;
-   [x] Deve ser possível realizar um saque;
-   [x] Deve ser possível buscar o extrato bancário do cliente por data;
-   [x] Deve ser possível atualizar dados da conta do cliente;
-   [x] Deve ser possível obter dados da conta do cliente;
-   [x] Deve ser possível deletar uma conta.
-   [x] Deve ser possivel retornar o balance.

### Regras de negócio

-   [x] Não deve ser possível cadastrar uma conta com CPF já existente;
-   [x] Não deve ser possível fazer depósito em uma conta não existente;
-   [x] Não deve ser possível buscar extrato em uma conta não existente;
-   [x] Não deve ser possível fazer saque em uma conta não existente;
-   [x] Não deve ser possível fazer saque quando o saldo for insuficiente.
-   [x] Não deve ser possível excluir uma conta não existente;
