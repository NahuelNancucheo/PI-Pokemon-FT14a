import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, getTypes } from '../../actions/index';
//import styles
//import components
import Filters from '../Filters/Filters';
import Cards from '../Cards/Cards';
//import Pagination from '../Pagination/Pagination';

function Home() {
    const dispatch = useDispatch();
    const pokemonsShowed = useSelector(store => store.pokemonsShowed);

    useEffect(() => {
        dispatch(getPokemons());
        dispatch(getTypes());
    },[]);

    return(
        <div className='home'>
            <Filters />
            <Cards className='card' show={pokemonsShowed}/>
        </div>
    );
};

export default Home;
/*
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [pokmnPerPage, setPokmnPerPage] = useState(12);

    const indexOfLastPkmn = currentPage * pokmnPerPage;
    const indexOfFirstPkmn = indexOfLastPkmn - pokmnPerPage;
    const currentPokmn = pokemonsShowed.slice(indexOfFirstPkmn, indexOfLastPkmn);
const paginate = (pageNumber) => setCurrentPage(pageNumber);

<Pagination pokmnPerPage={pokmnPerPage} totalPokmn={pokemonsShowed.length} paginate={paginate} />

*/

