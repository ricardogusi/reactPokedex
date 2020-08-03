import React from "react";
import "./card.css";

export default function Card({ name, hp, attack, defense, id }) {

  function importAll(r) {
    let images = {};
    // eslint-disable-next-line array-callback-return
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
     return images;
      }

    const images = importAll(require.context('../../assets/pokemons/', false,/\.(png|jpe?g|svg)$/));



  return (
    <div className="card mobile">
      <div className="top">
        {id !== 0 ? (
          <img
            className="pokemonPhoto"
            src={images[`${id}.png`]}
            alt="pokemon"
          />
        ) : (
          <></>
        )}
      </div>
      <div className="bottom">
        <span className="pokemonName"> {name} </span>
        <span>
          {hp > 0 ? (
            <>
              HP: <strong>{hp}</strong>{" "}
            </>
          ) : (
            <></>
          )}
        </span>

        <span>
          {attack > 0 ? (
            <>
              Attack: <strong>{attack}</strong>{" "}
            </>
          ) : (
            <></>
          )}
        </span>
        <span>
          {defense > 0 ? (
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
