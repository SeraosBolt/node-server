function calculaIMC(peso, altura){
    let imc = peso / (altura*altura)
    return imc 
}
function statusIMC(imc){
    let status 

    if(imc < 18.5){
        status = "Abaixo do Peso"
    }else if(imc >= 18.5 && imc < 24.9){
        status = "Peso Normal"
    }else if(imc >= 24.9 && imc < 30){
        status = "Acima do Peso"
    }else{
        status = "Obeso"
    }

    return status
}

function validarParametro(parametro){
    if(isNaN(parametro)){
        return false
    }else{
        return true
    }
}

exports.calculaIMC = calculaIMC
exports.statusIMC = statusIMC
exports.validarParametro = validarParametro