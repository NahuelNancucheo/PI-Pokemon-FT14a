import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    sortPokemons,
    filterByApi,
    filterByUsers,
    filterPokemonsByType

} from '../../actions/index';

function Filter() {


    const types = useSelector(store => store.types);
    const dispatch = useDispatch();

    const handleChangeTypes = (e) => { //by type

    };

    const handleChangeOrder = (e) => { //sort

    };
    //by api
    //by users

    return (
        <div className='filters'>
            <div className='sort'>
                <label htmlFor='order'>Ordenar por</label>
                <select name='order' >
                    <option value='none' >None</option>
                    <option value='high-low'>Mas fuerte</option>
                    <option value='low-high'>Mas debil</option>
                    <option value='A-Z'>A-Z</option>
                    <option value='Z-A'>Z-A</option>
                </select>
            </div>
            <div className='origin'>
                <label htmlFor='filter'>Filtrar por Origen</label>
                <select name='filter' >
                    <option>All</option>
                    <option>Pokemons by Users</option>
                    <option>Pokemons by Api</option>
                </select>
            </div>
            <div className='types'>
                <label htmlFor='types'>Filtrar por tipos</label>
                <select name='filter' >
                    <option value='all'>Todos</option>
                    {}
                </select>
            </div>
        </div>
    )
};

export default Filter;