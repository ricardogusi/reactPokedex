import React from "react";
import "./pages.css";
import PageDefault from "./PageDefault";

export default function RockPage() {
  return (
    <div className="container">
      <div className="botaoContainer">
        <PageDefault
          botaoCentral={"Rock"}
          type="6"
          limit="11"
          color="linear-gradient(100deg, #64615e 10%, #b2b0a9 100%)"
          desktopSize={"230vh"}
          mobileSize={"770vh"}
        />
      </div>
    </div>
  );
}
