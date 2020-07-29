import React, { useState, useEffect } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar/Searchbar";
import Pokedex from "./components/Pokedex/Pokedex";

function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);
  const [value, setValue] = useState("");

  const photo = `https://pokeres.bastionbot.org/images/pokemon/${number}.png`;

  useEffect(() => {
    get();
  }, [value]);

  const get = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokedex/2/");
    const data = await response.json();
    const pokemons = data.pokemon_entries;

    for (let i = 0; i < pokemons.length; i++) {
      const pokemonsName = [pokemons[i].pokemon_species.name]
      const pokemonsNumber = [pokemons[i].entry_number]
      pokemonsName.forEach(pokemonName => {
        if (pokemonName === value) {
          setName(pokemonName)
          setNumber(pokemonsNumber )
        } 
        
      });
      
    }
    
    
    
  };
 
  
  
  const handleValue = (e) => {
    
    setValue(e.target.value);
  };

  return (
    <div>
      <SearchBar updateValue={handleValue}  />
      <Pokedex
        name={name.toUpperCase()}
        number={number}
        photo={<img src={photo} alt={name} />}
      />
    </div>
  );
}

export default App;
