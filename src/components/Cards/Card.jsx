import React from "react";
import "./card.css";

export default function Card({ name, hp, attack, defense }) {
  return (
    <div className="card">
      <div className="top">
        <img
          className="pokemonPhoto"
          src="https://pokeres.bastionbot.org/images/pokemon/133.png"
          alt="pokemon"
        />
      </div>
      <div className="bottom">
        <span className="pokemonName"> {name} </span>
        <span>
          
          HP: <strong>{hp}</strong>
        </span>
        <span>
          
          Attack: <strong>{attack}</strong>
        </span>
        <span>
          
          Defense: <strong>{defense}</strong>
        </span>
      </div>
    </div>
  );
}
