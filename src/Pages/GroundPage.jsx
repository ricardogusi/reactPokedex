import React from "react";
import "./pages.css";
import PageDefault from "./PageDefault";

export default function GroundPage() {
  return (
    <div className="container">
      <div className="botaoContainer">
        <PageDefault
          botaoCentral={"Ground"}
          type="5"
          limit="14"
          color="linear-gradient(100deg, #674528 10%, #8d918c 100%)"
      
        />
      </div>
    </div>
  );
}
