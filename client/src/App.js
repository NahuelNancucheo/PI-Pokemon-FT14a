import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
//Components
import dotenv from 'dotenv';
dotenv.config();

function App() {
  return (
    <div className="App">
      <h1>Henry Pokemon</h1>
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