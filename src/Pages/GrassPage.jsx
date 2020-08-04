import React from "react";
import "./pages.css";
import PageDefault from "./PageDefault";

export default function GrassPage() {
  return (
    <div className="container">
      <div className="botaoContainer">
        <PageDefault
          botaoCentral={"Grass"}
          type="12"
          limit="14"
          color="linear-gradient(100deg, #679375 10%, #84ccb1 100%)"
     
        />
      </div>
    </div>
  );
}
