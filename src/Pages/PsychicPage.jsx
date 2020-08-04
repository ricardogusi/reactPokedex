import React from "react";
import "./pages.css";
import PageDefault from "./PageDefault";

export default function PsychicPage() {
  return (
    <div className="container">
      <div className="botaoContainer">
        <PageDefault
          botaoCentral={"Psychic"}
          type="14"
          limit="14"
          color="linear-gradient(100deg, #987994 10%, #f8d9e1 100%)"
   
        />
      </div>
    </div>
  );
}
