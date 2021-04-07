const express = require('express')
require('dotenv').config() //carrega as 'variáveis de ambiente'
const InicializaMongoServer = require('./Config/Db')
//Definindo as rotas da aplicação
const rotasCategoria = require('./routes/Categorias')

//Inicializamos o servidor MongoDb
InicializaMongoServer()

const app = express()
//Porta Default
const PORT = process.env.PORT
//Parse conteúdo JSON
app.use(express.json())

app.get('/', (req, res) => {
    res.json({mensagem: "API iComida 100% funcional! 👏",
        versao: '1.0.1'})
})
/* Rotas da Categoria */
app.use('/categorias', rotasCategoria)

app.listen(PORT, (req, res) => {
    console.log(`🖥️  Servidor Web iniciado na porta ${PORT}`)
})