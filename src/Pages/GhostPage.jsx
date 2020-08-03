import React from "react";
import "./pages.css";
import PageDefault from "./PageDefault";

export default function GhostPage() {
  return (
    <div className="container">
      <div className="botaoContainer">
        <PageDefault
          botaoCentral={"Ghost"}
          type="8"
          limit="3"
          color="linear-gradient(100deg, #140c0d 10%, #857c96 100%)"
          desktopSize={"100vh"}
          mobileSize={"245vh"}
        />
      </div>
    </div>
  );
}
