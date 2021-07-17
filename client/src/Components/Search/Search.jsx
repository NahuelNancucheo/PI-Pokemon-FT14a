import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {clearPokemonSearch, getPokemonName} from '../../actions/index';
import {useHistory} from 'react-router-dom';
import Caracs from '../Specs/Caracs';
//import styles

function Search() {
    let history = useHistory();
    const [name, setName] = useState('');

    const dispatch = useDispatch();
    const pokemonSearch = useSelector(store => store.pokemonSearch);//buscarlo en la api o en los 40 que traigo?
    //const pokemonsShowed = useSelector(store => store.pokemonsShowed)

    function handleChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(name.length) {
            dispatch(getPokemonName(name.toLowerCase()));
            setName('');
        }
        history.push('/home/pokemon/search')
    }

    useEffect(() => {
        return () => {
            dispatch(clearPokemonSearch());
        }
    }, [dispatch]);

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
        </div>
        <div>
            {pokemonSearch.name ? (
                 <Caracs pokemon={pokemonSearch} />
                
            ) : (
                <h2 className='notFound'>Loading...(aca iria un gif con wait a search)y catchear el error {pokemonSearch.error}</h2> 
            )}
        </div>
    </div>
    );  
};

export default Search;