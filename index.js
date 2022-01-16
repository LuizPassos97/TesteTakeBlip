const api = require ("./api")
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const server = express();

const port = process.env.PORT || 8000   
server.use(express.json())

server.listen(port)



server.get('/', async (req,res) => {
    try{
        const retorno = await api
        let apiFiltrada = []
        let limite = 0
        for (let i = 0; i < retorno.data.length; i++) {

            if (retorno.data[i].language === 'C#') {

                if (limite < 5) {

                    apiFiltrada[limite + 1] = {
                        titulo: retorno.data[i].name,
                        subTitulo: retorno.data[i].description,
                        imagemCard: retorno.data[i].owner.avatar_url,
                        linguagem: retorno.data[i].language,
                        data: retorno.data[i].created_at               
                    }
                    limite++
                }
            }
        }
        
        apiFiltrada = Object.assign({}, apiFiltrada);

        return res.send(apiFiltrada )

    }catch(error){

        res.send({error: error.message})
    }
})
