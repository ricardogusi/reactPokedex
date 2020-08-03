import React from "react";
import "./pages.css";
import PageDefault from "./PageDefault";

export default function SteelPage() {
  return (
    <div className="container">
      <div className="botaoContainer">
        <PageDefault
          botaoCentral={"Steel"}
          type="9"
          limit="2"
          color="linear-gradient(100deg, #919194 10%, #6e6a77 100%)"
          desktopSize={"100vh"}
          mobileSize={"180vh"}
        />
      </div>
    </div>
  );
}
