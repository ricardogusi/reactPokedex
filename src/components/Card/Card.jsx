import React, { useEffect, useState } from "react";
import "./card.css";


export default function Card({  photo, number}) {

    const [name, setName] = useState('')

    useEffect(() => {
        get();
      }, []);
    
      const get = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokedex/2/");
        const data = await response.json();
        setName(data.pokemon_entries[0].pokemon_species.name)
        
    };
    
    

    
  return (
    
    
    <>

      {photo}

      {name}

      {number}
    </>
  );
}
