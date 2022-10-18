function converterToCelcius(fahrenheit){
    let celsius = (fahrenheit - 32)/1.8
    return celsius
}

function converterToFahrenheit(celsius){
    let fahrenheit = (celsius * 1.8) + 32
    return fahrenheit
}

function converterTemperatura(temperatura, conversor){
    let resultado 
    if(conversor == "C"){
        resultado = converterToCelcius(temperatura)
    }else if(conversor == "F"){
        resultado = converterToFahrenheit(temperatura)
    }

    return resultado
}

exports.converterTemperatura = converterTemperatura