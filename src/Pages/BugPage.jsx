import React from "react";
import "./pages.css";
import PageDefault from "./PageDefault";

export default function BugPage() {
  return (
    <div className="container">
      <div className="botaoContainer">
        <PageDefault
          botaoCentral={"Bug"}
          type="7"
          limit="12"
          color="linear-gradient(100deg, #87c876 10%, #5b5476 100%)"
          desktopSize={"230vh"}
          mobileSize={"835vh"}
        />
      </div>
    </div>
  );
}
