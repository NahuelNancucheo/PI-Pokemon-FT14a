import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
//Components
import LandingPage from './Components/LandingPage/LandingPage'
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Specs from './Components/Specs/Specs';
import CreatePokemon from './Components/CreatePokemon/CreatePokemon';
import Search from './Components/Search/Search';
import { PokemonQuiz } from './Components/PokemonQuiz/PokemonQuiz';
import dotenv from 'dotenv';
dotenv.config();

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LandingPage} />
      <Route path='/home' component={Nav} />
      <Route exact path='/home/pokemons' component={Home} />
      <Route exact path='/home/pokemons/:id' component={Specs} />
      <Route exact path='/home/pokemon/create' component={CreatePokemon} />
      <Route exact path='/home/pokemon/search' component={Search} />
      <Route exact path='/home/pokemonquiz' component={PokemonQuiz} />
    </div>
  );
}

export default App;