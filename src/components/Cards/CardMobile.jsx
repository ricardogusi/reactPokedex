import React from "react";
import "./card.css";

export default function Card({ name, hp, attack, defense, id }) {
  return (
    <div className="card mobile">
      <div className="top">

        { id !== 0 ?
        <img
          className="pokemonPhoto"
          src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
          alt="pokemon"
        /> 
        : <></>
        }

      </div>
      <div className="bottom">
        <span className="pokemonName"> {name} </span>
        <span>
          {hp ? (
            <>
              HP: <strong>{hp}</strong>{" "}
            </>
          ) : (
            <></>
          )}
        </span>
        
        <span>
          {attack ? (
            <>
              Attack: <strong>{attack}</strong>{" "}
            </>
          ) : (
            <></>
          )}
        </span>
        <span>
          {defense ? (
            <>
              Defense: <strong>{defense}</strong>{" "}
            </>
          ) : (
            <></>
          )}
        </span>
      </div>
    </div>
  );
}
