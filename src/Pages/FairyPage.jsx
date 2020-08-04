import React from "react";
import "./pages.css";
import PageDefault from "./PageDefault";

export default function FairyPage() {
  return (
    <div className="container">
      <div className="botaoContainer">
        <PageDefault
          botaoCentral={"Fairy"}
          type="18"
          limit="5"
          color="linear-gradient(100deg, #f9d0d4 10%, #deabb6  100%)"          
        />
      </div>
    </div>
  );
}
