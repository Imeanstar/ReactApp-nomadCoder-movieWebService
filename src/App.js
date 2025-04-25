//실행시 npm start 를 cmd에 입력
import React from "react";
import { useState, useEffect } from "react";
import Movie from "./components/Movie";
import Home from "./routes/Home.js";
import Detail from "./routes/Detail.js";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return <Router>
    <Switch>
      <Route path="/movie">
        <Detail />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>;
}

export default App;
