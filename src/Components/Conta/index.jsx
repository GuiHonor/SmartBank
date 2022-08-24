import React, { useState } from "react";

import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";
import { Icon, Box, Botao, IconTheme } from "../UI/index"
import { darkTheme } from "../UI/temas"

import { 
  Saldo, 
  Detalhe, 
} from "./styledcomponents";

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
            <h2>Conta</h2>
        <div style={{ fontSize: "26px", padding: "20px 0" }}>
             
             Saldo disponível{" "}

             <span>

               <IconTheme src= {dinheiro} alt="Ícone Saldo" />

             </span>

             {toggleState ? (

               <Saldo>

                 <Detalhe>R$</Detalhe> 30.000{" "}

               </Saldo>

             ) : null}

        </div>

      <Botao  onClick={toggleHandler}>

          <Icon
           style={{ marginTop: "2px" }}
           src={toggleState ? privado : olho_icone}
           alt="Privacidade do Saldo"

          />
      </Botao>
    
    </Box>
  );
};

export default Conta;
