import React from "react";
import "./pages.css";
import PageDefault from "./PageDefault";

export default function DragonPage() {
  return (
    <div className="container">
      <div className="botaoContainer">
        <PageDefault
          botaoCentral={"Dragon"}
          type="16"
          limit="3"
          color="linear-gradient(100deg, #79afde 10%, #f3b76e  100%)"
        
        />
      </div>
    </div>
  );
}
