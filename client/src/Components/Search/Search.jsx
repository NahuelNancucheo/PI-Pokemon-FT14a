import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {clearPokemonSearch, getPokemonName} from '../../actions/index';
import Caracs from '../Specs/Caracs';
//import styles

function Search() {
    const [name, setName] = useState('');

    const dispatch = useDispatch();
    const pokemonSearch = useSelector(store => store.pokemonSearch);//buscarlo en la api o en los 40 que traigo?
    //const pokemonsShowed = useSelector(store => store.pokemonsShowed)

    function handleChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        /*
        const pokmnSearch = pokemonsShowed.find(p=>p.name === name.toLowerCase())
        if(pokmnSearch) {
            window.location.replace(`/home/pokemons/${pokmnSearch.id}`)
            setName('')
        } else {
            dispatch(getPokemonName(name.toLowerCase()))
            setName('')
        }
        */
        
        if(name.length) {
            dispatch(getPokemonName(name.toLowerCase()));
            setName('');
        }
    }

    useEffect(() => {
        return () => {
            dispatch(clearPokemonSearch());
        }
    }, []);

    return (
    <div className='home'>
        <div className='search-bar'>
            <form onSubmit={e => handleSubmit(e)}>
                <input 
                    className='input-text'
                    type='text'
                    placeholder='Busca un pokemon'
                    value={name}
                    onChange={e => handleChange(e)}
                />
                <input className='input-btn' type='submit' value='Buscar' />
            </form>
            <div>
            {pokemonSearch.message ? (
                <h2 className='notFound'>Loading...(aca iria un gif con wait a search)/ {pokemonSearch.message}</h2> 
            ) : (
                <Caracs pokemon={pokemonSearch} />
            )}
            </div>
        </div>
    </div>
    );  
};

export default Search;
//{pokemonSearch.error}