import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { v4 as uuidv4 } from 'uuid';
import {
    sortPokemons,
    filterPokemonsByOrigin,
    filterPokemonsByType,
} from '../../actions/index';

function Filter() {
    const [order, setOrder] = useState('');
    const [filterTypes, setFilterTypes] = useState('all');
    const [filter, setFilter] = useState('all');


    const types = useSelector(store => store.types);
    const dispatch = useDispatch();

    const handleChangeFilter = (e) => {
        setFilter(e.target.value);
    };

    const handleChangeTypes = (e) => { //by type
        setFilterTypes(e.target.value);
    };

    const handleChangeOrder = (e) => { //sort
        setOrder(e.target.value);
    };

    useEffect(() => {
        dispatch(filterPokemonsByOrigin(filter));
        dispatch(filterPokemonsByType(filterTypes));
        dispatch(sortPokemons(order));
    }, [filter, filterTypes, order]);

    return (
        <div className='filters'>
            <div className='sort'>
                <label htmlFor='order'>Ordenar por</label>
                <select name='order' onChange={handleChangeOrder} >
                    <option value='none' >None</option>
                    <option value='high-low'>Mas fuerte</option>
                    <option value='low-high'>Mas debil</option>
                    <option value='A-Z'>A-Z</option>
                    <option value='Z-A'>Z-A</option>
                </select>
            </div>
            <div className='origin'>
                <label htmlFor='filter'>Filtrar por Origen</label>
                <select name='filter' onChange={handleChangeFilter} >
                    <option value='all'>All</option>
                    <option value='created'>Pokemons by Users</option>
                    <option value='exists'>Pokemons by Api</option>
                </select>
            </div>
            <div className='types'>
                <label htmlFor='types'>Filtrar por tipos</label>
                <select name='Types' onChange={handleChangeTypes} >
                    <option value='all'>Todos</option>
                    {types && types.map(t => (
                        <option key={`${t.name}`} value={`${t.name}`}>{`${t.name}`}</option>
                    ))}
                </select>
            </div>
        </div>
    )
};

export default Filter;