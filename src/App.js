import React from 'react';
import { HashRouter, Route } from "react-router-dom";

import Home from "./routes/Home";
import Search from "./routes/Search";
import Navigation from "./components/Navigation";
import './App.css'

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/search" component={Search} />
    </HashRouter>
  );
}

export default App;