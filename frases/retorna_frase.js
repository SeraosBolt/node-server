const frase = require("./frase_do_dia");

function retornaFraseDoDia(dia) {
    return frase.frases[dia - 1]
}

exports.retornaFraseDoDia = retornaFraseDoDia