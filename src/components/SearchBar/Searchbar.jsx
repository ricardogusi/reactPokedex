import React, { useState  } from "react";
import "./searchbar.css";
import Logo from "../../assets/pokedexlogo.png";

export default function SearchBar() {
  const [value, setValue] = useState("");

  
  const handleValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="searchbar">
      <img src={Logo} alt="reactPokedexLogo" />
      <input
        type="text"
        placeholder="Digite o nome do Pokemon"
        onChange={handleValue}
        value={value}
      />
      <div className="options">
        <label>
          {"Escolha por tipo: "}
          <select className="select">
            <option defaultValue=" "></option>
            <option value="Normal">Normal</option>
            <option value="Fighting">Fighting</option>
            <option value="Flying">Flying</option>
            <option value="Poison">Poison</option>
            <option value="Ground">Ground</option>
            <option value="Rock">Rock</option>
            <option value="Bug">Bug</option>
            <option value="Ghost">Ghost</option>
            <option value="Steel">Steel</option>
            <option value="Fire">Fire</option>
            <option value="Water">Water</option>
            <option value="Grass">Grass</option>
            <option value="Electric">Electric</option>
            <option value="Psychic">Psychic</option>
            <option value="Ice">Ice</option>
            <option value="Dragon">Dragon</option>
            <option value="Dark">Dark</option>
            <option value="Fairy">Fairy</option>
            <option value="Shadow">Shadow</option>
          </select>
        </label>
      </div>
    </div>
  );
}
