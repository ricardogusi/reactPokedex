import React from "react";
import "./pages.css";
import PageDefault from "./PageDefault";

export default function IcePage() {
  return (
    <div className="container">
      <div className="botaoContainer">
        <PageDefault
          botaoCentral={"Ice"}
          type="15"
          limit="5"
          color="linear-gradient(100deg, #94c0e3 10%, #81c7e7 100%)"
    
        />
      </div>
    </div>
  );
}
