import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, getTypes } from '../../actions/index';
//import styles
//import components
import Filters from '../Filters/Filters';
import Cards from '../Cards/Cards';
import Pagination from '../Pagination/Pagination';

function Home() {
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pokmnPerPage, setPokmnPerPage] = useState(12);

    const dispatch = useDispatch();
    const pokemonsShowed = useSelector(store => store.pokemonsShowed);

    useEffect(() => {
        setLoading(true);
        dispatch(getPokemons());
        //dispatch(getTypes());
        setLoading(false);
    },[]);

    const indexOfLastPkmn = currentPage * pokmnPerPage;
    const indexOfFirstPkmn = indexOfLastPkmn - pokmnPerPage;
    const currentPokmn = pokemonsShowed.slice(indexOfFirstPkmn, indexOfLastPkmn);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return(
        <div className='home'>
            <Filters />
            <Cards className='card' show={currentPokmn} loading={loading} />
            <Pagination pokmnPerPage={pokmnPerPage} totalPokmn={pokemonsShowed.length} paginate={paginate} />
        </div>
    );
};

export default Home;

