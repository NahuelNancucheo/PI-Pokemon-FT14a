import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {clearPokemonSearch, getPokemonName} from '../../actions/index';
import Caracs from '../Specs/Caracs';
//import styles

function Search() {
    const [name, setName] = useState('');

    const dispatch = useDispatch();
    const pokemonSearch = useSelector(store => store.pokemonSearch);//buscarlo en la api o en los 40 que traigo?

    function handleChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
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
            {pokemonSearch.error ? (
                <h2 className='notFound'>{pokemonSearch.error}</h2>
            ) : (
                <Caracs pokemon={pokemonSearch} />
            )}
            </div>
        </div>
    </div>
    );  
};

export default Search;