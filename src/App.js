import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Switch>
      <Route to="/" exact>
        <HomePage />
      </Route>
    </Switch>
  );
}

export default App;
