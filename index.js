const retornaFraseDoDia = require('./frases/retorna_frase')
const imc = require('./imc/calcula_imc')
const conversor = require('./conversor-temperatura/conversor_temperatura')


// INICIANDO O EXPRESS
const express = require('express')
const app = express()

let data = new Date()

//METODO GET PARA REALIZAR A REQUISIÇÃO
app.get('/', (req, res) =>{
    let mensagem = {mensagem: 'Hello World! Olá Mundo valorizar o português'}
    res.json(mensagem)
})

//REQUISIÇÃO QUE CHAMA A FUNÇÃO QUE RETORNA UMA FRASE COM BASE NO DIA DE HOJE
app.get('/frase', (req, res) =>{
    let dia = data.getDate()
    let frase_do_dia = retornaFraseDoDia.retornaFraseDoDia(dia)

    let resposta = {frase: frase_do_dia}

    res.json(resposta)
})

app.get('/imc', (req, res) =>{
    console.log(req.query)
    let peso = req.query.peso
    let altura = req.query.altura
    if(imc.validarParametro(peso) && imc.validarParametro(altura)){
        let valor_imc = imc.calculaIMC(peso, altura)
        let status_imc = imc.statusIMC(valor_imc)            
        let resposta = {imc: valor_imc, status: status_imc}
    
        res.json(resposta)
    }else{        
        res.status(400).json({"ERRO": "Parametros inválidos"})
    }
})

app.get('/conversor', (req, res) =>{
    let temperatura = req.query.temperatura
    let formato = req.query.conversor

    let temp_convertida = conversor.converterTemperatura(temperatura, formato)

    let resposta = {temp_convertida: temp_convertida, formato: "º"+formato}

    res.json(resposta)
})


app.listen(8080, () =>{
    console.log('Servidor node iniciado em: '+ data)
})