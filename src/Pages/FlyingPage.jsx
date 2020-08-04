import React from "react";
import "./pages.css";
import PageDefault from "./PageDefault";

export default function FlyingPage() {
  return (
    <div className="container">
      <div className="botaoContainer">
        <PageDefault
          botaoCentral={"Flying"}
          type="3"
          limit="19"
          color="linear-gradient(110deg, #7abbcb 0%, #e1ebe5 100%)"
        
        />
      </div>
    </div>
  );
}
