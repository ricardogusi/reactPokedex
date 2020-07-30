import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";




import Home from "./Pages/Home";
import NormalPage from "./Pages/NormalPage";

function App() {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
         <Home />
        </Route>
        <Route path="/normal">
          <NormalPage/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
