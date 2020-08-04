import React from "react";
import "./pages.css";
import PageDefault from "./PageDefault";

export default function WaterPage() {
  return (
    <div className="container">
      <div className="botaoContainer">
        <PageDefault
          botaoCentral={"Water"}
          type="11"
          limit="32"
          color="linear-gradient(100deg, #577fb1 10%, #83c7d6 100%)"
       
        />
      </div>
    </div>
  );
}
