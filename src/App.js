import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import NormalPage from "./Pages/NormalPage";
import FightingPage from "./Pages/FightingPage";
import FlyingPage from "./Pages/FlyingPage";
import PoisonPage from "./Pages/PoisonPage";
import GroundPage from "./Pages/GroundPage";
import RockPage from "./Pages/RockPage";
import BugPage from "./Pages/BugPage";
import GhostPage from "./Pages/GhostPage";
import SteelPage from "./Pages/SteelPage";
import FirePage from "./Pages/FirePage";
import WaterPage from "./Pages/WaterPage";
import GrassPage from "./Pages/GrassPage";
import ElectricPage from "./Pages/ElectricPage";
import PsychicPage from "./Pages/PsychicPage";
import IcePage from "./Pages/IcePage";
import DragonPage from "./Pages/DragonPage";
import FairyPage from "./Pages/FairyPage";
import AllPage from "./Pages/AllPage";

function App() {
  return (
    <BrowserRouter>
    
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/All">
          <AllPage />
        </Route>
        <Route path="/normal">
          <NormalPage />
        </Route>
        <Route path="/Fighting">
          <FightingPage />
        </Route>
        <Route path="/Flying">
          <FlyingPage />
        </Route>
        <Route path="/Poison">
          <PoisonPage />
        </Route>
        <Route path="/Ground">
          <GroundPage />
        </Route>
        <Route path="/Rock">
          <RockPage />
        </Route>
        <Route path="/Bug">
          <BugPage />
        </Route>
        <Route path="/Ghost">
          <GhostPage />
        </Route>
        <Route path="/Steel">
          <SteelPage />
        </Route>
        <Route path="/Fire">
          <FirePage />
        </Route>
        <Route path="/Water">
          <WaterPage />
        </Route>
        <Route path="/Grass">
          <GrassPage />
        </Route>
        <Route path="/Electric">
          <ElectricPage />
        </Route>
        <Route path="/Psychic">
          <PsychicPage />
        </Route>
        <Route path="/Ice">
          <IcePage />
        </Route>
        <Route path="/Dragon">
          <DragonPage />
        </Route>
        <Route path="/Fairy">
          <FairyPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
