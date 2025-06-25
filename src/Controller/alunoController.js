const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function listarAlunos(req, res) {
    try {
        const alunos = await prisma.aluno.findMany();
        res.status(200).json(alunos);
    } catch (error) {
        console.error("Erro ao listar alunos:", error);
        res.status(500).json({ error: "Erro ao listar alunos" });
    }
}

async function criarAluno(req, res) {
    try {
        const { nome, idade } = req.body
        const aluno = await prisma.aluno.create({
            data: {
                nome,
                idade: Number(idade)
            }
        })
        res.status(201).json(aluno);
    } catch (error) {
        console.error("Erro ao criar aluno:", error);
        res.status(500).json({ error: "Erro ao criar aluno" });
    }
}

async function atualizarAluno(req, res) {
    const { id } = req.params;
    const { nome, idade } = req.body;
    try {
        const aluno = await prisma.aluno.update({
            where: { id: id },
            data: {
                nome,
                idade: Number(idade)
            }
        })
        res.status(200).json(aluno);
    } catch (error) {
        console.error("Erro ao atualizar aluno:", error);
        res.status(500).json({ error: "Erro ao atualizar aluno" });
    }
}

async function deletarAluno(req, res) {
    const { id } = req.params;
    try {
        const aluno = await prisma.aluno.delete({
            where: { id: id }
        });
        res.status(200).json({ message: "Aluno deletado com sucesso", aluno });
    } catch (error) {
        console.error("Erro ao deletar aluno:", error);
        res.status(500).json({ error: "Erro ao deletar aluno" });
    }
}

module.exports = { listarAlunos, criarAluno, atualizarAluno, deletarAluno };