import React from "react";
import ThemeOff from "../../assets/images/themeOff.svg";
import ThemeOn from "../../assets/images/themeOn.svg";
import { Icon } from "../UI";

const light = <Icon src= {ThemeOn} alt= "Tema Claro" />
const dark = <Icon src= {ThemeOff} alt= "Tema Escuro" />


//SE DER MERDA É AQUI OTARIO
export default ({theme}) => (theme ? dark : light)