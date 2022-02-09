import React from "react";
import { HashRouter as Router, Switch, Route} from 'react-router-dom'

import {Home, Pokemons, Timer, ToDo, Page404} from './pages'
import Nav from "./layout/Nav";

import './styles/HomeStyles.css'


const App = () => {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route path='/' exact> <Home/> </Route>
        <Route path='/Pokemons'> <Pokemons/> </Route>
        <Route path='/Timer'> <Timer/> </Route>
        <Route path='/ToDo'> <ToDo/> </Route>
        <Route> <Page404/> </Route>
      </Switch>
    </Router>
  );
}

export default App;
