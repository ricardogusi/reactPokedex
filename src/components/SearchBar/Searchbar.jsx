import React from "react";
import {useHistory, Link} from 'react-router-dom'
import "./searchbar.css";
import Logo from "../../assets/pokedexlogo.png";

export default function SearchBar(props) {


  let history = useHistory();

  function handlePage(value) {
    history.push(`${value}`);
  }

  


  
  return (
    <div className="searchbar">
      <Link to="/">  
      <img src={Logo} alt="reactPokedexLogo" />
      </Link>
      <input
        type="text"
        placeholder="Digite o nome do Pokemon"
        onChange={props.updateValue}
        
      />
      <div className="options">
        <label>
          {"Escolha por tipo: "}
            
          <select className="select" onChange={event => handlePage(event.target.value)}>
            <option defaultValue=" "></option>


            <option onClick={handlePage} value="Normal">Normal</option>


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
