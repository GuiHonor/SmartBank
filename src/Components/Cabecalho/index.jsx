import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";

import { Titulo } from "../UI/index"
import {  corPrimaria, conteudoClaro} from "../UI/variaveis";
import { 
  StyleCabecalho,
  LogoDiv,
  Logo,
  BotaoCabecalho
} from "./styledcomponents";


const Cabecalho = () => {

  return (

    <StyleCabecalho>

      <LogoDiv>
        <Logo src={bank_logo} alt="Logo Smart Bank" />
        <Titulo>Smart Bank</Titulo>
      </LogoDiv>
      
      <div>

        <BotaoCabecalho Background = {conteudoClaro} Color = {corPrimaria} href="https://google.com">
          Ajuda
        </BotaoCabecalho>
        <BotaoCabecalho Background = {corPrimaria} Color = {conteudoClaro} href="https://google.com">
          Sair
        </BotaoCabecalho>

      </div>

    </StyleCabecalho>

  );
};

export default Cabecalho;
