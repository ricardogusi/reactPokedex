import React from "react";
import { useHistory, Link } from "react-router-dom";
import "./searchbar.css";
import Logo from "../../assets/pokedexlogo.png";
import { useMediaQuery } from "react-responsive";

export default function SearchBar(props) {

  

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const isMobile = useMediaQuery({ 
    query: "(max-device-width: 1224px)" 
  });

  let history = useHistory();

  function handlePage(value) {
    history.push(`${value}`);
  }


  

  return (
    <>
      {isDesktopOrLaptop && (
        <div className="searchbar">
          <Link to="/">
            <img src={Logo} alt="reactPokedexLogo" />
          </Link>
          <Link to="/" >
          <input
            type="text"
            placeholder="Digite o nome do Pokemon"
            onChange={props.updateValue}
            autoFocus={props.focus}            
          />
          </Link>
          <div className="options">
            <label>
              {"Escolha por tipo: "}

              <select
                className="select"
                onChange={(event) => handlePage(event.target.value)}
              >
                <option defaultValue=" "></option>

                <option value="All">All</option>
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
                <option value="Fairy">Fairy</option>
              </select>
            </label>
          </div>
        </div>
      )}

      {isMobile && (
        <div className="searchBarMobile">
          <Link to="/">
            <img src={Logo} alt="reactPokedexLogo" />
          </Link>

          <Link to="/" >
          <input
          className="inputMobile"
            type="text"
            placeholder="Digite o nome do Pokemon"
            onChange={props.updateValue}
            autoFocus={props.focus}  
            
          />
        </Link>
          <div className="options optionsMobile">
            <label>
              {"Escolha por tipo: "}

              <select
                className="select "
                onChange={(event) => handlePage(event.target.value)}
              >
                <option defaultValue=" "></option>

                <option value="All">All</option>
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
                <option value="Fairy">Fairy</option>
              </select>
            </label>
          </div>
        </div>
      )}
    </>
  );
}
