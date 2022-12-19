
## 🚀 Desafio 01 - Conceitos do Node.js

---

### 💻 Sobre o desafio

Nesse desafio desenvolvemos uma aplicação para gerenciar tarefas (em inglês *todos*).É permitida a criação de um usuário com `name` e `username` bem como fazer o CRUD de *todos*:

- Criar um novo *todo*;
- Listar todos os *todos*;
- Alterar o `title` e `deadline` de um *todo* existente;
- Marcar um *todo* como feito;
- Excluir um *todo*;

Tudo isso para cada usuário em específico (o `username` será passado pelo header).


### Rotas da aplicação

#### POST `/users`

A rota deve receber `name`, e `username` dentro do corpo da requisição. Ao cadastrar um novo usuário, ele deve ser armazenado dentro de um objeto no seguinte formato:

```js
{ 
	id: 'uuid', // precisa ser um uuid
	name: 'Danilo Vieira', 
	username: 'danilo', 
	todos: []
}
```

> **O objeto usuário deve ser retornado na resposta da requisição.**

#### GET `/todos`

A rota deve receber, pelo header da requisição, uma propriedade `username` contendo o username do usuário e retornar uma lista com todas as tarefas desse usuário.

#### POST `/todos`

A rota deve receber `title` e `deadline` dentro do corpo da requisição e, uma propriedade `username` contendo o username do usuário dentro do header da requisição. Ao criar um novo *todo*, ele deve ser armazenada dentro da lista `todos` do usuário que está criando essa tarefa. Cada tarefa deverá estar no seguinte formato:  

```js
{ 
	id: 'uuid', // precisa ser um uuid
	title: 'Nome da tarefa',
	done: false, 
	deadline: '2021-02-27T00:00:00.000Z', 
	created_at: '2021-02-22T00:00:00.000Z'
}
```

**Observação**: Lembre-se de iniciar a propriedade `done` sempre como `false` ao criar um *todo*.

**Dica**: Ao fazer a requisição com o Insomnia ou Postman, preencha a data de `deadline` com o formato `ANO-MÊS-DIA` e ao salvar a tarefa pela rota, faça da seguinte forma:

{ 
	id: 'uuid', // precisa ser um uuid
	title: 'Nome da tarefa',
	done: false, 
	deadline: new Date(deadline), 
	created_at: new Date()
}

> **O objeto do todo deve ser retornado na resposta da requisição.**


#### PUT `/todos/:id`

A rota deve receber, pelo header da requisição, uma propriedade `username` contendo o username do usuário e receber as propriedades `title` e `deadline` dentro do corpo. É preciso alterar **apenas** o `title` e o `deadline` da tarefa que possua o `id` igual ao `id` presente nos parâmetros da rota.


#### PATCH `/todos/:id/done`

A rota deve receber, pelo header da requisição, uma propriedade `username` contendo o username do usuário e alterar a propriedade `done` para `true` no *todo* que possuir um `id` igual ao `id` presente nos parâmetros da rota.


#### DELETE `/todos/:id`

A rota deve receber, pelo header da requisição, uma propriedade `username` contendo o username do usuário e excluir o *todo* que possuir um `id` igual ao `id` presente nos parâmetros da rota.


### Específicação dos testes

- [x] Should be able to create a new user
- [x] Should not be able to create a new user when username already exists
- [x] Should be able to list all user's todos
- [x] Should be able to create a new todo
- [x] Should be able to update a todo
- [x] Should not be able to update a non existing todo
- [] Should be able to mark a todo as done
- [] Should not be able to mark a non existing todo as done
- [] Should be able to delete a todo
- [] Should not be able to delete a non existing todo