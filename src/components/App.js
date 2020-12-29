import React, { useEffect } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';

import { actionCreators } from '../actions';
import Navigation from "./Navigation";
import Home from "../routes/Home";
import Search from "../routes/Search";
import Favorite from "../routes/Favorite";
import './App.css'

function App({ state, initState }) {

  useEffect(() => {
    const localState = localStorage.getItem('state');
    const parsedState = JSON.parse(localState);
    console.log(parsedState);
    /* if (parsedState) {
      initState(parsedState);
    } */
    // eslint-disable-next-line react-hooks/exhaustive-deps	
  }, []);

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
  }, [state]);

  return (
    <Router>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/favorite" exact={true} component={Favorite} />
    </Router>
  );
}

function mapStateToProps(state) {
  return { state: state }
}


function mapDispatchToProps(dispatch) {
  return {
    initState: (localState) => dispatch(actionCreators.initState(localState))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);