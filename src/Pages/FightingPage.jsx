import React from "react";
import "./pages.css";
import PageDefault from "./PageDefault";

export default function FightingPage() {
  return (
    <div className="container">
      <div className="botaoContainer">
        <PageDefault
          botaoCentral={"Fighting"}
          type="2"
          limit="8"
          color="linear-gradient(110deg, #a1b4c5 0%, #c1665f 90%)"
        
        />
      </div>
    </div>
  );
}
