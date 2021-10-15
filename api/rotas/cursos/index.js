const roteador = require('express').Router()
const { Curso } = require('./Curso')

roteador
.get('/', async (requisicao, resposta) => {
    const curso = new Curso({});
    const resultados = await curso.listar();
    resposta.status(200)
    resposta.json(resultados);
})
.post('/', async (requisicao, resposta) => {
    const dadosRecebidos = requisicao.body;
    const curso = new Curso(dadosRecebidos);
    await curso.criar();
    resposta.status(201).json(curso);
})
.get('/:idCurso', async (requisicao, resposta) => {
    const id = requisicao.params.idCurso;

    console.log(id)

    const curso = new Curso({});
    await curso.get(id);
    resposta.status(200).json(curso);
})

module.exports = roteador;