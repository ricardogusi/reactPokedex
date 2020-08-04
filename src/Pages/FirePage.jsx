import React from "react";
import "./pages.css";
import PageDefault from "./PageDefault";

export default function FirePage() {
  return (
    <div className="container">
      <div className="botaoContainer">
        <PageDefault
          botaoCentral={"Fire"}
          type="10"
          limit="12"
          color="linear-gradient(100deg, #ea673a 10%, #f9d764 100%)"
         
        />
      </div>
    </div>
  );
}
