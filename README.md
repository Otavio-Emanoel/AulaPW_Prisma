# 📚 Aula Prisma - Sistema de Gerenciamento de Alunos

> **Projeto de exemplo para ensino de Prisma ORM com MongoDB e Node.js**

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Configuração e Instalação](#configuração-e-instalação)
- [Como Executar](#como-executar)
- [API Endpoints](#api-endpoints)
- [Conceitos Prisma Explicados](#conceitos-prisma-explicados)
- [Comandos Prisma Importantes](#comandos-prisma-importantes)
- [Testando a API](#testando-a-api)
- [Troubleshooting](#troubleshooting)

## 🎯 Sobre o Projeto

Este projeto é uma **API REST simples** desenvolvida para demonstrar o uso do **Prisma ORM** com **MongoDB** em uma aplicação **Node.js** com **Express**. O sistema permite gerenciar alunos através de operações CRUD básicas.

### Funcionalidades:
- ✅ Listar todos os alunos
- ✅ Criar novo aluno
- ✅ Atualizar dados de um aluno
- ✅ Deletar um aluno

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **Node.js** | 22.16.0 | Runtime JavaScript |
| **Express** | 5.1.0 | Framework web para Node.js |
| **Prisma** | 6.10.1 | ORM moderno para JavaScript/TypeScript |
| **MongoDB** | Atlas | Banco de dados NoSQL na nuvem |
| **CORS** | 2.8.5 | Middleware para Cross-Origin Resource Sharing |
| **dotenv** | 16.5.0 | Carregamento de variáveis de ambiente |

## 📁 Estrutura do Projeto

```
Aula_Prisma/
├── 📄 index.js                    # Arquivo principal do servidor
├── 📄 package.json               # Dependências e scripts do projeto
├── 📄 .env                       # Variáveis de ambiente (DATABASE_URL, PORT)
├── 📄 .gitignore                 # Arquivos ignorados pelo Git
├── 📄 README.md                  # Documentação do projeto
├── 📂 prisma/
│   └── 📄 schema.prisma          # Schema do banco de dados
├── 📂 src/
│   ├── 📄 router.js              # Definição das rotas da API
│   └── 📂 Controller/
│       └── 📄 alunoController.js # Lógica de negócio dos alunos
└── 📂 generated/
    └── 📂 prisma/                # Cliente Prisma gerado automaticamente
        ├── 📄 client.js
        ├── 📄 index.js
        └── ...
```

## ⚙️ Configuração e Instalação

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd Aula_Prisma
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure as variáveis de ambiente
Certifique-se de que o arquivo `.env` existe na raiz do projeto:

```env
PORT=3000
DATABASE_URL="mongodb+srv://usuario:senha@cluster.mongodb.net/aula_prisma?retryWrites=true&w=majority"
```

### 4. Gere o cliente Prisma
```bash
npx prisma generate
```

## 🚀 Como Executar

### Modo desenvolvimento:
```bash
npm run dev
```

O servidor será iniciado na porta `3000` e você verá a mensagem:
```
O servidor ta rodando na porta 3000
```

## 🔗 API Endpoints

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/alunos` | Lista todos os alunos |
| `POST` | `/alunos` | Cria um novo aluno |
| `PUT` | `/alunos/:id` | Atualiza um aluno específico |
| `DELETE` | `/alunos/:id` | Remove um aluno específico |

### Exemplos de uso:

#### 📄 GET /alunos
```bash
curl http://localhost:3000/alunos
```
**Resposta:**
```json
[
  {
    "id": "507f1f77bcf86cd799439011",
    "nome": "João Silva",
    "idade": 20
  }
]
```

#### 📄 POST /alunos
```bash
curl -X POST http://localhost:3000/alunos \
  -H "Content-Type: application/json" \
  -d '{"nome": "Maria Santos", "idade": 22}'
```

#### 📄 PUT /alunos/:id
```bash
curl -X PUT http://localhost:3000/alunos/507f1f77bcf86cd799439011 \
  -H "Content-Type: application/json" \
  -d '{"nome": "João Santos", "idade": 21}'
```

#### 📄 DELETE /alunos/:id
```bash
curl -X DELETE http://localhost:3000/alunos/507f1f77bcf86cd799439011
```

## 📖 Conceitos Prisma Explicados

### 1. **Schema Prisma** (`prisma/schema.prisma`)
O arquivo schema define:
- **Generator**: Como o cliente Prisma será gerado
- **Datasource**: Configuração da conexão com o banco
- **Models**: Estrutura dos dados (tabelas/coleções)

```prisma
// Gerador do cliente
generator client {
  provider = "prisma-client-js"
}

// Fonte de dados
datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

// Modelo de dados
model Aluno {
  id    String @id @default(auto()) @map("_id") @db.ObjectId
  nome  String
  idade Int
}
```

### 2. **Prisma Client**
O cliente é gerado automaticamente e fornece:
- **Type-safe queries**: Consultas com tipos seguros
- **Auto-completion**: Completar automático no editor
- **Runtime type checking**: Verificação de tipos em tempo de execução

### 3. **Decoradores Prisma**
- `@id`: Define chave primária
- `@default(auto())`: Valor padrão automático
- `@map("_id")`: Mapeia para campo específico no banco
- `@db.ObjectId`: Especifica tipo nativo do MongoDB

## 🔧 Comandos Prisma Importantes

```bash
# Gerar o cliente Prisma
npx prisma generate

# Visualizar dados no Prisma Studio
npx prisma studio

# Fazer push do schema para o banco
npx prisma db push

# Resetar o banco de dados
npx prisma db push --force-reset

# Verificar status do banco
npx prisma db ping
```

## 🧪 Testando a API

### Usando curl:
```bash
# Teste básico de conectividade
curl http://localhost:3000/alunos

# Criar aluno
curl -X POST http://localhost:3000/alunos \
  -H "Content-Type: application/json" \
  -d '{"nome": "Ana Silva", "idade": 19}'
```

### Usando Postman ou Insomnia:
1. Importe a collection com os endpoints
2. Configure a base URL: `http://localhost:3000`
3. Teste cada endpoint com dados válidos

## 🔍 Troubleshooting

### Problemas Comuns:

#### 1. **Erro de conexão com banco**
```
Error: P2010 Raw query failed
```
**Solução**: Verifique a `DATABASE_URL` no arquivo `.env`

#### 2. **Cliente não encontrado**
```
Error: Cannot find module '@prisma/client'
```
**Solução**: Execute `npx prisma generate`

#### 3. **Porta em uso**
```
EADDRINUSE: address already in use :::3000
```
**Solução**: Altere a porta no `.env` ou finalize processos na porta 3000

#### 4. **Erro de validação**
```
Argument idade must not be null
```
**Solução**: Certifique-se de enviar todos os campos obrigatórios

### Logs úteis para debug:
```javascript
// No controller, adicione logs
console.log('Dados recebidos:', req.body);
console.log('ID do aluno:', req.params.id);
```

## 📚 Estrutura dos Arquivos Explicada

### `index.js` - Servidor Principal
```javascript
const express = require('express');
const cors = require('cors');
require('dotenv').config();    // Carrega variáveis do .env

const routes = require('./src/router')

const app = express();

app.use(cors())               // Permite requisições cross-origin
app.use(express.json());      // Parser JSON para requisições
app.use(routes)               // Aplica as rotas

app.listen(process.env.PORT, () => {
    console.log(`O servidor ta rodando na porta ${process.env.PORT}`);
})
```

### `src/router.js` - Definição das Rotas
```javascript
const express = require('express');
const { listarAlunos, criarAluno, atualizarAluno, deletarAluno } = require('./Controller/alunoController');

const router = express.Router();

// Mapeia verbos HTTP para funções do controller
router.get('/alunos', listarAlunos);        // Listar
router.post('/alunos', criarAluno);         // Criar
router.put('/alunos/:id', atualizarAluno);  // Atualizar
router.delete('/alunos/:id', deletarAluno); // Deletar

module.exports = router;
```

### `src/Controller/alunoController.js` - Lógica de Negócio
```javascript
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Cada função implementa uma operação CRUD
async function listarAlunos(req, res) {
    // Busca todos os alunos
    const alunos = await prisma.aluno.findMany();
}

async function criarAluno(req, res) {
    // Cria novo aluno com dados do body
    const aluno = await prisma.aluno.create({ data: {...} });
}

// ... outras funções
```

## 🎓 Conceitos Importantes para a Aula

### 1. **ORM (Object-Relational Mapping)**
- Mapeia objetos para registros no banco
- Abstrai SQL/NoSQL em métodos JavaScript
- Fornece type safety e validação

### 2. **MongoDB vs SQL**
- Documentos vs Tabelas
- ObjectId vs Integer ID
- Schema flexível vs rígido

### 3. **RESTful API**
- GET: Buscar dados
- POST: Criar novos recursos
- PUT: Atualizar recursos existentes
- DELETE: Remover recursos

### 4. **Middleware Express**
- `cors()`: Permite requests cross-origin
- `express.json()`: Parse do body JSON
- Funções que executam entre request e response

## 📝 Exercícios Sugeridos

1. **Adicionar validação**: Implementar validação de idade mínima
2. **Adicionar campo**: Incluir campo "email" no modelo Aluno
3. **Filtros**: Implementar busca por nome ou idade
4. **Paginação**: Adicionar limit e offset na listagem
5. **Relacionamentos**: Criar modelo Curso e relacionar com Aluno

---

## 👨‍🏫 Para o Professor

Este projeto serve como base para ensinar:
- Conceitos de ORM moderno
- Integração Node.js + MongoDB
- Design de APIs REST
- Boas práticas de estruturação de projeto
- Debugging e tratamento de erros

**Duração estimada da aula**: 2-3 horas

**Pré-requisitos**: Conhecimento básico de JavaScript, Node.js e conceitos de banco de dados.

---

**Desenvolvido para fins educacionais - ETEC 2025** 🎓
