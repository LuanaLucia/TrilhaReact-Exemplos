import React from "react";
import './Card.css';

function Card(props){
    return (
        <div id='cardPlano'>
            <h2>{props.titulo}</h2>
            <h3>{props.desc}</h3>
            <img src={props.imagem} alt=""/>
            <h1>{props.valor}</h1>
            <a href={props.link} target="_blank">Saiba Mais</a>
        </div>
    );
}

export default Card;