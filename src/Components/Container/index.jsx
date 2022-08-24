import React from "react";
import Conta from "../Conta";
import ExtratoBox from "../Extrato";

import { Titulo } from "../UI";
import { darkTheme } from "../UI/temas";
import {
  StyledContainer,
  Section
} from "./styledcomponents";



const Container = () => {
  return (
    
    <StyledContainer>
     <Titulo> Olá Guilherme Honório!</Titulo>
      <Section >

        <Conta />
        <ExtratoBox/>
      </Section>
      
    </StyledContainer>
    
  );
};

export default Container;
