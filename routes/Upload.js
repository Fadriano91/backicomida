const express = require('express')
const router = express.Router()
const multer = require('multer')

//Definindo a pasta padrão
const upload = multer({
    dest: './public/uploads'
})

/************************************
 * Lista um upload de uma imagem
 * POST /
 * *******************************/
router.post('/', upload.array('file'),
                 async(req, res) => {
                    console.log(`Arquivos recebidos: ${req.files.lenght}`)
                    const statusUpload = req.files.lenght > 0 ? true : false
                    res.send({
                        upload: statusUpload,
                        files: req.files
                    })
})
module.exports = router