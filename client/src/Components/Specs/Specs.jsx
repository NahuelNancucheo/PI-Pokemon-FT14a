import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getPokemonById, clearPokemonSpecs} from '../../actions/index';
import Caracs from "./Caracs";
import './styles.css'

function Specs(props) {
    const dispatch = useDispatch();
    const pokemonSpecs = useSelector(store => store.pokemonSpecs);

    useEffect(() => {
        dispatch(getPokemonById(props.match.params.id));
        return () => {
            dispatch(clearPokemonSpecs());
        }
    }, [dispatch]);


    return (
        <div className='caracs'>
             <Caracs pokemon={pokemonSpecs}/>
        </div>
       
    )
};

export default Specs;