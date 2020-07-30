import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar/Searchbar";
import Card from "../components/Cards/Card";
import './pages.css'

export default function NormalPage() {
  const [names, setNames] = useState([]);
  const [id, setId] = useState('')
  const color = "linear-gradient(110deg, #FDBB2D 0%, #3A1C71 100%)";

  useEffect(() => {
    get();
  
    document.body.style.background = color;
    document.body.style.height = "450vh"
  }, []);

  const get = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/type/1/");
    const data = await response.json();
    const pokemons = await data.pokemon;


    for (let i = 0; i < 22; i++) {
      const pokemonName = pokemons[i].pokemon.name;
      const pokemonUrl = fetch(pokemons[i].pokemon.url)
      const dataPokemon = (await pokemonUrl).json()
      
      console.log(dataPokemon)
      
      setNames((prev) => [...prev, pokemonName]);
      // setUrl((prev) => [...prev, pokemonUrl])
    }
  };
  
  

  
  

  return (
    <div className="container" >
      <SearchBar />
      <div className="botaoContainer"><div className="botao">Normal</div></div>
      <div className="cardContainer" >
        <ul>
          {names.map((name, i) => (<li key={i} ><Card name={name.toUpperCase()} /></li>))}
          </ul>
      </div>
    </div>
  );
}
