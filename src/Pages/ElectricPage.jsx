import React from "react";
import "./pages.css";
import PageDefault from "./PageDefault";

export default function ElectricPage() {
  return (
    <div className="container">
      <div className="botaoContainer">
        <PageDefault
          botaoCentral={"Electric"}
          type="13"
          limit="9"
          color="linear-gradient(100deg, #f6e383 10%, #d0b96e 100%)"
      
        />
      </div>
    </div>
  );
}
