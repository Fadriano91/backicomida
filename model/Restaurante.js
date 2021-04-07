const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Criando o Schema do Restaurante
const RestauranteSchema = mongoose.Schema({
    nome: {type: String , unique:true},
    status: {type: String, enum: ['ativo','inativo'], default: 'ativo'},
    foto: {
        originalname: {type: String},
        path: {type: String},
        size: {type: Number},
        mimetype: {type: String}
    },
    notaMedia: {type:Number},
    categoria: {type:Schema.Types.ObjectId, ref: 'categoria'},
    faixaPreco: {Type:String, enum:['barato','médio','luxo']},
    tempoEntrega: {Type: String},
    endereco: {
        logradouro: {type:String},
        bairro: {type:String},
        cep: {type:String},
        municipio: {type:String},
        estado: {type:String},
        complemento: {type:String}
    },
    geolocalizaçao: {
        latitude: {type:Number},
        longitude: {type:Number}
    }
},{timestamps:true})
module.exports = mongoose.model('restaurante', RestauranteSchema)