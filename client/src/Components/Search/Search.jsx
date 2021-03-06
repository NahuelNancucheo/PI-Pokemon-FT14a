import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {clearPokemonSearch, getPokemonName} from '../../actions/index';
import {useHistory} from 'react-router-dom';
import Caracs from '../Specs/Caracs';
import './styles.css'
import Pikachu from '../../assets/pikachu.jpg'

function Search() {
    let history = useHistory();
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch();
    const pokemonSearch = useSelector(store => store.pokemonSearch);

    function handleChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(name.length) {
            setLoading(true)
            dispatch(getPokemonName(name.toLowerCase()));
            setName('');
            history.push('/home/pokemon/search');
            //setLoading(false)
        } else {
            alert('Please type a name')
        }
    }

    useEffect(() => {
        return () => {
            dispatch(clearPokemonSearch());
        }
    }, [dispatch]);

    return (
    <>
        <div className='search-bar'>
            <form onSubmit={e => handleSubmit(e)}>
                <input 
                    className='input-text'
                    type='text'
                    placeholder='Search a pokemon'
                    value={name}
                    onChange={e => handleChange(e)}
                />
                <input className='input-btn' type='submit' value='Search' />
            </form>
        </div>
            {pokemonSearch.id ? (
                 <Caracs pokemon={pokemonSearch} />
                
            ) : 
                pokemonSearch.message ? 
                (<div className='not-found'><h2 className='notfound'>404 Not found: That Pokemon does not exists, yet</h2>
                <img  width='900px' src={Pikachu} alt='error'/></div> )
                 : !loading ? null : (<span>loading...</span>) 
            }
    </>
    );  
};

export default Search;