const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use((requisicao, resposta, proximo) => {
    resposta.set('Access-Control-Allow-Origin', '*')
    proximo()
})

const roteador = require('./rotas/cursos')
app.use('/api/cursos', roteador)

app.listen( PORT , () => console.log(`A API está funcionando na porta ${PORT}`))