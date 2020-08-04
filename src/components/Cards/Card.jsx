import React from "react";
import "./card.css";
import LazyLoad from 'react-lazyload';



export default function Card({ name, hp, attack, defense, id }) {

  
  function importAll(r) {
    let images = {};
    // eslint-disable-next-line array-callback-return
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
     return images;
      }

    const images = importAll(require.context('../../assets/pokemons/', false,/\.(png|jpe?g|svg)$/));


  return (
    <div className="card">
      <div className="top">
        
      <LazyLoad height={200} once >
      <img className="imgCard" src={images[`${id}.png`]} alt={id} />
      </LazyLoad> 
               
       
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
