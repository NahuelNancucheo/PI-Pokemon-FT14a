import {
    GET_POKEMONES,
    GET_POKEMON_ID,
    FILTER_TYPE_POKEMON,
    FILTER_ORIGIN_POKEMON,
    FILTER_BY_ORIGIN_API,
    SORT_POKEMONS,
    ADD_POKEMON,
    GET_POKEMON_NAME,
    GET_TYPES,
    CLEAR_POKEMON_SEARCH,
    CLEAR_POKEMON_SPECS
} from '../constants';

const initialData = {
    pokemonsLoaded: [], //api
    pokemonsShowed: [], //todos
    pokemonsFiltered: [], //by api or users
    myPokemons: [], //db
    pokemonSpecs: {},
    pokemonSearch: {},
    types: []
};

export default function rootReducer(state = initialData, action) {
    switch (action.type) {
        case ADD_POKEMON:
            return {...state, myPokemons: [...state.myPokemons, action.payload]};

        case GET_TYPES:
            return {...state, types: action.payload};

        case GET_POKEMONES:
            return {
                ...state,
                pokemonsShowed: action.payload,
                //pokemonsFiltered: action.payload
            }

        case GET_POKEMON_NAME:
            return {...state, pokemonSearch: action.payload};

        case GET_POKEMON_ID:
            return {...state, pokemonSpecs: action.payload};

        case FILTER_BY_ORIGIN_API:
            return {...state, pokemonsLoaded: action.payload};

        case FILTER_ORIGIN_POKEMON:
            return {...state, myPokemons: action.payload};
        
        case FILTER_TYPE_POKEMON:
            if(action.payload === 'all') {
                return {...state, pokemonsShowed: state.pokemonsShowed}
            } else {
                return {
                    ...state, 
                    pokemonsShowed: state.pokemonsShowed.filter(el => 
                        el.types.includes(action.payload)
                        )
                    };
            }

        case SORT_POKEMONS:
            if(action.payload === 'low-high') {
                return {
                    ...state,
                    pokemonsShowed: state.pokemonsShowed.sort((a,b) => {
                        return a.attack - b.attack;
                    })
                };
            }else if(action.payload === 'high-low'){
                return {
                    ...state,
                    pokemonsShowed: state.pokemonsShowed.sort((a,b) => {
                        return b.attack - a.attack;
                    })
                };
            } else if (action.payload === 'Z-A') {
                return {
                    ...state,
                    pokemonsShowed: state.pokemonsShowed.sort((a,b) => {
                        let aName = a.name.toLowerCase();
                        let bName = b.name.toLowerCase();
                        if(aName < bName) {
                            return 1;
                        }
                        if(aName > bName) {
                            return -1;
                        }
                        return 0;
                    })
                };
            } else if(action.payload === 'A-Z') {
                return {
                    ...state,
                    pokemonsShowed: state.pokemonsShowed.sort((a,b) => {
                        let aName = a.name.toLowerCase();
                        let bName = b.name.toLowerCase();
                        if(aName > bName) {
                            return 1;
                        }
                        if(aName < bName) {
                            return -1;
                        }
                        return 0;
                    })
                };
            } else {
                return {...state, pokemonsShowed: state.pokemonsShowed};
            }

        case CLEAR_POKEMON_SPECS:
            return {...state, pokemonSpecs: {}};

        case CLEAR_POKEMON_SEARCH:
            return {...state, pokemonSearch: {}};

        default:
            return state;
    }
};