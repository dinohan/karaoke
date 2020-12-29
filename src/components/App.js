import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./Navigation";
import Home from "../routes/Home";
import Search from "../routes/Search";
import Favorite from "../routes/Favorite";
import './App.css'

function App() {
  return (
    <Router>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/favorite" exact={true} component={Favorite} />
    </Router>
  );
}

export default App;