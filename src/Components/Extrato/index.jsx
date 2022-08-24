import React from "react";
import { Box, Botao} from "../UI/index"
import { extratoLista } from "../../info";
import  Items  from "./Items";



const ExtratoBox = () => {
    
    return (
        <Box>
            {extratoLista.updates.map(({id, type, value, from, date}) => {
        return (

            <Items key = {id} type = {type} value = {value} from = {from} date = {date}/>
        );

        }  )}
            
            <Botao>Ver Mais</Botao>
        </Box>

    )
}

export default ExtratoBox;