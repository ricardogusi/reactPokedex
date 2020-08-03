import React from "react";
import "./pages.css";
import PageDefault from "./PageDefault";

export default function NormalPage() {
  return (
    <div className="container">
      <div className="botaoContainer">
        <PageDefault
          botaoCentral={"Normal"}
          type="1"
          limit="22"
          color="linear-gradient(110deg, #FDBB2D 0%, #3A1C71 100%)"
          desktopSize={"433vh"}
          mobileSize={"1490vh"}
        />
      </div>
    </div>
  );
}
