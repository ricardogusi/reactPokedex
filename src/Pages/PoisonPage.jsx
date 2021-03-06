import React from "react";
import "./pages.css";
import PageDefault from "./PageDefault";

export default function PoisonPage() {
  return (
    <div className="container">
      <div className="botaoContainer">
        <PageDefault
          botaoCentral={"Poison"}
          type="4"
          limit="33"
          color="linear-gradient(100deg, #645f9c 10%, #000222 100%)"        
        />
      </div>
    </div>
  );
}
