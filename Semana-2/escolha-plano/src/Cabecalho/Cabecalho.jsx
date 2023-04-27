import React from "react";
import './Cabecalho.css';
import BtnPadrao from "../BtnPadrao/BtnPadrao";

function Cabecalho(props){
    return (
        <header>
        <BtnPadrao nome="Home" />
        <BtnPadrao nome="Planos" />
        </header>
    );
}

export default Cabecalho;