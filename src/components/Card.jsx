import React from 'react'
import api from '../services/api'
import { useEffect, useState } from 'react';
import './card.css'


export default function Card(props) {

  //  const {onAdd} = props;
    return (
      <div className="main-container">
        <h1>{props.name}</h1>
        <h3>
          <span role="img" aria-label="carbohydrates">
            Carboidratos: {props.carbohydrates}
          </span>
          
        </h3>
        <h3>
          <span role="img" aria-label="protein">
            Proteina: {props.protein}
          </span>
        </h3>
        <h3>
          <span role="img" aria-label="fat">
            Gordura:{props.fat}
          </span>
        </h3>
        <h3>
          <span role="img" aria-label="calories">
            Calorias: {props.calories}
          </span>
        </h3>
        <h3>
          <span role="img" aria-label="sugar">
            Açúcar: {props.sugar}
          </span>
        </h3>
        <button onClick={()=>props.onAdd(props)}>Adicionar ao Carrinho</button>
      </div>
        
    )
}
