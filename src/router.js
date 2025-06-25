const express = require('express');
const { listarAlunos, criarAluno, atualizarAluno, deletarAluno } = require('./Controller/alunoController');

const router = express.Router();

router.get('/alunos', listarAlunos);
router.post('/alunos', criarAluno);
router.put('/alunos/:id', atualizarAluno);
router.delete('/alunos/:id', deletarAluno);

module.exports = router;