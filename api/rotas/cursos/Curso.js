const { BD } = require("../../banco-de-dados/bd_fake")

class Curso {
    constructor( {nome, mensalidade} ){
        this.nome = nome;
        this.mensalidade = mensalidade;
    }

    async criar() {
        BD.inserir(this);
    }

    async listar () {
        return BD.listar();
    }

    async get ( id ) {
        const atualizado = await BD.get(id);

        console.log(atualizado)

        this.nome = atualizado.nome;
        this.mensalidade = atualizado.mensalidade;
    }

}

module.exports = {
    Curso
}