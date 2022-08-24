import {
    fundoClaro, 
    conteudoClaro, 
    textoFundoClaro,
    fundoEscuro,
    conteudoEscuro,
    textoFundoEscuro
 } from "./variaveis"



export const lightTheme = {
    body: fundoClaro,
    inside: conteudoClaro,
    text: textoFundoClaro,
    filter: ''
}

export const darkTheme = {
    body: fundoEscuro,
    inside: conteudoEscuro,
    text: textoFundoEscuro,
    filter: "invert(100%)"
}

