const express = require('express')
require('dotenv').config() //carrega as 'variáveis de ambiente'
const InicializaMongoServer = require('./Config/Db')
//Definindo as rotas da aplicação
const rotasCategoria = require('./routes/Categorias')
const rotasRestaurantes = require('./routes/Restaurantes')
const rotaUpload = require('./routes/Upload')

//Inicializamos o servidor MongoDb
InicializaMongoServer()

const app = express()

//Removendo por segurança
app.disable('x-poweered-by')

//Porta Default
const PORT = process.env.PORT

//Middleware do Express
app.use(function(req, res, next){
    //Em produção, remora o * e a atualize com o domínio/ip do seu app
    res.setHeader('Access-Control-Allow-Origin', '*')
    //Cabeçalho qu serão permitidos
    res.setHeader('Access-Control-Allow-Header', '*')
    //res.setHeader('Access-Control-Allow-Header', 'Content-Type, Accept, acess-token')
    //Métodos que serão permitidos
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH')
    next()
})



//Parse conteúdo JSON
app.use(express.json())

app.get('/', (req, res) => {
    res.json({mensagem: "API iComida 100% funcional! 👏",
        versao: '1.0.2'})
})
/* Rotas da Categoria */
app.use('/categorias', rotasCategoria)
/*Rotas do Restaurante */
app.use('/restaurantes', rotasRestaurantes)
/*Rotas do conteúdo público */
app.use('/public', express.static('public'))
/*Rota do upload */
app.use('/upload', rotaUpload)

/*Rotas para tratar exceções - 404  (Deve ser a últimarota SEMPRE)*/
app.use(function(req,res) {
    res.status(404).json({message: `A rota ${req.originalUrl} não existe`})
})

app.listen(PORT, (req, res) => {
    console.log(`🖥️  Servidor Web iniciado na porta ${PORT}`)
})