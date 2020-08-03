import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import SearchBar from "../components/SearchBar/Searchbar";
import Card from "../components/Cards/Card";
import "./pages.css";

export default function PageDefault(props) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 767px)",
  });

  const [names, setNames] = useState([]);
  const [ids, setIds] = useState([]);
  const [hps, setHps] = useState([]);
  const [attacks, setAttacks] = useState([]);
  const [defenses, setDefenses] = useState([]);

  useEffect(() => {
    get();

    // eslint-disable-next-line no-lone-blocks
    {
      isDesktopOrLaptop
        ? (document.body.style.height = `${props.desktopSize}`)
        : (document.body.style.height = `${props.mobileSize}`);
    }
    document.body.style.background = `${props.color}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const get = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/type/${props.type}/`
    );
    const data = await response.json();
    const pokemons = await data.pokemon;

    for (let i = 0; i < `${props.limit}`; i++) {
      const pokemonName = pokemons[i].pokemon.name;

      setNames((prev) => [...prev, pokemonName]);

      fetch(pokemons[i].pokemon.url)
        .then((res) => res.json())
        .then((dataUrl) => {
          const hp = dataUrl.stats[0].base_stat;
          const attack = dataUrl.stats[1].base_stat;
          const defense = dataUrl.stats[2].base_stat;
          const id = dataUrl.id;

          setHps((prev) => [...prev, hp]);
          setAttacks((prev) => [...prev, attack]);
          setDefenses((prev) => [...prev, defense]);
          setIds((prev) => [...prev, id]);
        });
    }
  };

  return (
    <div className="container">
      <SearchBar />
      <div className="botaoContainer">
        <div className="botao">
          <span>{props.botaoCentral}</span>{" "}
        </div>
      </div>
      <div className="cardContainer">
        <ul>
          {names.map((name, i) => (
            <li key={i}>
              <Card
                name={name.toUpperCase()}
                hp={hps[i]}
                attack={attacks[i]}
                defense={defenses[i]}
                id={ids[i]}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
