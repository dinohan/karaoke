import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "../routes/Home";
import Search from "../routes/Search";
import Navigation from "./Navigation";
import './App.css'

function App() {
  return (
    <Router>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/search" component={Search} />
    </Router>
  );
}

export default App;