import axios from 'axios';
import {
    GET_POKEMONES,
    GET_POKEMON_ID,
    FILTER_TYPE_POKEMON,
    FILTER_ORIGIN_POKEMON,
    SORT_POKEMONS,
    ADD_POKEMON,
    GET_POKEMON_NAME,
    GET_TYPES,
    CLEAR_POKEMON_SEARCH,
    CLEAR_POKEMON_SPECS
} from '../constants';
//const {REACT_APP_BACKEND_URL} = process.env;
const BACKEND = 'http://localhost:3001'

/*
addPokemon
getTypes
getPokemons
getPokemonName
getPokemonById
filterPokemonsByType
filterPokemonByOrigin
sortPokemons
clearPokemonSpecs
clearPokemonsSearch
*/
export function addPokemon(specs) {
    return (dispatch) => {
        axios.post(`${BACKEND}/pokemons`, specs)
        .then(r => {
            dispatch({type: ADD_POKEMON, payload: r.data})
        })
    }
};

export function getTypes() {
    return async (dispatch) => {
        const r = await axios.get(`${BACKEND}/types`);
        dispatch({ type: GET_TYPES, payload: r.data });
    }
};

export function getPokemons() {
    return async (dispatch) => {
        const r = await axios.get(`${BACKEND}/pokemons`);
        dispatch({ type: GET_POKEMONES, payload: r.data });
    }
};

export function getPokemonName(name) {
    return async (dispatch) => {
        const r = await axios.get(`${BACKEND}/pokemons?name=${name}`);
        dispatch({ type: GET_POKEMON_NAME, payload: r.data });
    }
};

export function getPokemonById(id) {
    return async (dispatch) => {
        const r = await axios.get(`${BACKEND}/pokemons/${id}`);
        dispatch({ type: GET_POKEMON_ID, payload: r.data });
    }
};


export function filterPokemonsByType(type) {
    return {
        type: FILTER_TYPE_POKEMON,
        payload: type
    }
};

export function filterPokemonsByOrigin(type) {
    return {
        type: FILTER_ORIGIN_POKEMON,
        payload: type
    }
};
/*
export function filterByApi() {
    return (dispatch) => {
        axios.get(`${BACKEND}/pokemons?filter=byApi`)
        .then(r => {
            dispatch({type: FILTER_BY_ORIGIN_API, payload: r.data})
        })
    }
};


export function filterByUsers() {
    return (dispatch) => {
        axios.get(`${BACKEND}/pokemons?filter=byUsers`)
        .then(r => {
            dispatch({type: FILTER_ORIGIN_POKEMON, payload: r.data})
        })
    }
};
*/
export function sortPokemons(type) {
    return {
        type: SORT_POKEMONS,
        payload:type
    }
};

export function clearPokemonSpecs() {
	return {type: CLEAR_POKEMON_SPECS};
};

export function clearPokemonSearch() {
	return {type: CLEAR_POKEMON_SEARCH};
};