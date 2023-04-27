import React from "react";
import './BtnPadrao.css';

function BtnPadrao(props){
    return (
        <button id='btnPadrao'>
            {props.nome}
        </button>
    );
}

export default BtnPadrao;