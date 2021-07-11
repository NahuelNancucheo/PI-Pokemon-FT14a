import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
//Components
import LandingPage from './Components/LandingPage/LandingPage';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Specs from './Components/Specs/Specs';
import CreatePokemon from './Components/CreatePokemon/CreatePokemon';
import Search from './Components/Search/Search';
import dotenv from 'dotenv';
dotenv.config();

function App() {
  return (
    <div className="App">
      <h1>Henry Pokemon</h1>
      <Route exact path='/' component={LandingPage} />
      <Route path='/home' component={Nav} />
      <Route exact path='/home/pokemons' component={Home} />
      <Route exact path='/home/pokemons/:id' component={Specs} />
      <Route exact path='/home/pokemons/create' component={CreatePokemon} />
      <Route exact path='/home/pokemons/search' component={Search} />
    </div>
  );
}

export default App;

/*
import characterCards from './modules/characterscards
----------------
crear constants.js -> local host 3001 (mi backend)
---------------
en el componente importar 
{useState, useEffect} from 'react'
import axios from 'axios'
import {connect} from react-redux --> si voy a usar los maps, sino con useselector y dispatch es diferente

export defaulr function(componente)
*/
/*
con redux:
crear store(con su index.js: import createstore y applymiddlewar from redux) -> reducer -> actions
import reducer from ./reducers
import thunk from redux-thunk



*/