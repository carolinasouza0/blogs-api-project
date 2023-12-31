# Projeto Blogs API

Projeto realizado no módulo de Back-end durante o curso de Desenvolvimento Web pela [Trybe](https://www.betrybe.com/).

## Descrição

Foi desenvolvido uma `API` e um `banco de dados` para produção de conteúdo para um blog.

Este projeto é uma aplicação em `Node.js` usando o pacote `sequelize` para fazer um CRUD de posts

## 👩‍💻 Tecnologias Utilizadas

- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
- ![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
- ![sequelize](https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue)
- [Joi](https://joi.dev/api/?v=17.6.0)
- [JWT](https://jwt.io/) (Json Web Token)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Thunder Client](https://www.thunderclient.com/)
- [Docker](https://www.docker.com/)

## 🛠️ Habilidades Utilizadas

- Criar endpoints seguindo o padrão REST;
- Criar uma API de um CRUD (Create, Read, Update e Delete);
- Criar middlewares e validações;
- Desenvolvimento seguindo a arquitetura MSC;
- Utilizar o `ORM Sequelize` para criar e popular tabelas, consultar, inserir, alterar e deletar dados nas tabelas.

## 🗄️ Fornecido pela [Trybe](https://www.betrybe.com/)

- Arquivo `Dockerfile`, `docker-compose.yml`, `.sequelizerc`, `server.js`, `.eslintrc.json`, `.eslintignore`, `env.example`, `./src/seeders`, `./src/config/config.js`.

## 🎲 Banco de dados

**Diagrama de Entidade-Relacionamento**

![DER](./src/der.png)

O Banco possui 4 tabelas criadas com o `ORM Sequelize`:

- Uma tabela chamada `users` com os atributos:

  | `id` | `displayname` | `email` | `password` | `image` |
  | ---- | ------------- | ------- | ---------- | ------- |

- Uma tabela chamada `categories`, com os atributos:

  | `id` | `name` |
  | ---- | ------ |

- Uma tabela chamada `blog_posts`, com os atributos:

  | `id` | `title` | `content` | `user_id` | `published` | `updated` |
  | ---- | ------- | --------- | --------- | ----------- | --------- |

  `user_id` é uma **chave estrangeira**, referenciando o id da tabela `users`

- Uma tabela chamada `post_categories`, contendo uma **chave primária composta** utilizando os dois atributos:

  | `post_id` | `category_id` |
  | --------- | ------------- |

<a id="section"></a>

## 📝 Scripts para deletar o banco e criá-lo novamente:

#### Para deletar o banco de dados:

```
npm run drop
```

#### Para criar e gerar as tabelas:

```
npm run prestart
```

#### Para popular as tabelas:

```
npm run seed
```

## ⌨️ Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu `.env`

É importante configurar as variáveis: `MYSQL_HOST`, `MYSQL_PORT`, `MYSQL_USER`, `MYSQL_PASSWORD`

```
#### SERVER VARS
NODE_ENV=development
API_PORT=3001

#### DATABASE VARS
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_DB_NAME=blogs-api
MYSQL_USER=root
MYSQL_PASSWORD=password

#### SECRECT VARS
JWT_SECRET=suaSenhaSecreta
```

Caso opte por uma configuração padrão basta renomear o arquivo `.env.example` para `.env`

## ⚙️ Instalando Dependências

Para rodar esta aplicação é necessário ter o **Docker** 🐳 e **Docker Compose** instalados no seu computador.

O **Docker Compose** precisa estar na versão **1.29** ou superior.

### 1. Clone o repositório

```
git clone git@github.com:carolinasouza0/blogs-api-project.git
```

- Entre na pasta do repositório que você acabou de clonar:

```
cd blogs-api-project
```

### 2. Rode os serviços `node` e `db` com o comando:

```
docker-compose up -d --build
```

**Esses serviços irão inicializar um container chamado `blogs_api` e outro chamado `blogs_api_db`**

### 3. Use o comando abaixo para ter acesso ao terminal interativo do container `blogs_api` criado pelo compose, que está rodando em segundo plano.

```
docker exec -it blogs_api bash
```

### 4. Dentro do terminal do container `blogs_api` instale as dependências:

```
npm install
```

**⚠️ Após a instalação, rode os [scripts](#section) na sequência (drop, prestart e seed)**

### 5. Dentro do terminal do container `blogs_api` execute a aplicação:

```
npm run dev
```

**⚠️ Para restaurar o banco, rode os [scripts](#section) na sequência (drop, prestart e seed)**
