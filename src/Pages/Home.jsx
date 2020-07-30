import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar/Searchbar";
import Pokedex from "../components/Pokedex/Pokedex";
import './pages.css'

export default function Home() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);
  const [value, setValue] = useState("");
  const color = "linear-gradient(to bottom right, rgba(53,106,188,1), rgba(255,205,0,.7))"

  const photo = `https://pokeres.bastionbot.org/images/pokemon/${number}.png`;

  useEffect(() => {
    get();
    document.body.style.background = color;
    document.body.style.height = "120vh"
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const get = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokedex/2/");
    const data = await response.json();
    const pokemons = data.pokemon_entries;

    for (let i = 0; i < pokemons.length; i++) {
      const pokemonsName = [pokemons[i].pokemon_species.name];
      const pokemonsNumber = [pokemons[i].entry_number];
      pokemonsName.forEach((pokemonName) => {
        if (pokemonName === value) {
          setName(pokemonName);
          setNumber(pokemonsNumber);
        }
      });
    }
  };

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="container">
      <SearchBar updateValue={handleValue} />
      <div className="container">
      <Pokedex
        name={name.toUpperCase()}
        number={number}
        photo={<img src={photo} alt={name} />}
      />
      </div>
    </div>
  );
}
