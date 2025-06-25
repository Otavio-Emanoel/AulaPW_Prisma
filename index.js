const express = require('express');
const cors = require('cors');
require('dotenv').config();

const routes = require('./src/router')

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes)

app.listen(process.env.PORT, () => {
    console.log(`O servidor ta rodando na porta ${process.env.PORT}`);
})