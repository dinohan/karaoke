import React, { useEffect } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';

import { actionCreators } from '../actions';
import Navigation from "./Navigation";
import Home from "../routes/Home";
import Search from "../routes/Search";
import Favorite from "../routes/Favorite";
import './App.css'
import Detail from './Detail';
import { State } from '../Interface';

type AppProps = {
  state: State;
  initState: Function;
}

function App({ state, initState }: AppProps) {

  useEffect(() => {
    const localState = localStorage.getItem('state');
    if (localState) {
      const parsedState = JSON.parse(localState);
      initState(parsedState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps	
  }, []);

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
  }, [state]);

  return (
    <ToastProvider
      autoDismiss
      autoDismissTimeout={2000}
      /* components={{ Toast: Snack }} */
      placement="bottom-center"
    >
      <Router>
        {
          state.detailOpened ? (<div>
            <Detail />
          </div>) : (<div>

          </div>)
        }
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/favorite" exact={true} component={Favorite} />
      </Router>
    </ToastProvider >
  );
}

function mapStateToProps(state: State) {
  return { state: state }
}


function mapDispatchToProps(dispatch: Function) {
  return {
    initState: (localState: State) => dispatch(actionCreators.initState(localState))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);