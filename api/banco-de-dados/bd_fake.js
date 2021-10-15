class BD {
    static memoria = [];
    static quantidade = 0;
    
    static async inserir ( item ){
        item.id = BD.quantidade;
        BD.quantidade++;

        BD.memoria.push(item);
    }

    static async listar (){
        return BD.memoria;
    }

    static async get( id ) {
        return BD.memoria[id];
    }

}

module.exports = {
    BD
}