import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, getTypes } from '../../actions/index';
import './styles.css';
//import components
import Filters from '../Filters/Filters';
import Cards from '../Cards/Cards';
import Pagination from '../Pagination/Pagination';
import Search from '../Search/Search';

function Home() {
    const [currentPage, setCurrentPage] = useState(1);
    const [pokmnPerPage] = useState(12);

    const dispatch = useDispatch();
    const pokemonsShowed = useSelector(store => store.pokemonsShowed);
    
    useEffect(() => {
        dispatch(getPokemons()); 
        dispatch(getTypes());
    },[dispatch]);

    //get current pokemons
    const indexOfLastPokmn = currentPage * pokmnPerPage;
    const indexOfFirstPokmn = indexOfLastPokmn - pokmnPerPage;
    const currentPokmn = pokemonsShowed.slice(indexOfFirstPokmn, indexOfLastPokmn);

    //change page
    const paginate = (pageNumber) =>{ 
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    } 

    return(
        <>
            <Search className='search'/>
            <div className='home'>
                <Filters />
                {pokemonsShowed[0] ? (<Cards className='card' show={currentPokmn} />) : (<span>Loading...</span>)}
                <Pagination pokmnPerPage={pokmnPerPage} totalPokmn={pokemonsShowed.length} paginate={paginate}/>
            </div>
        </>
        
    );
};

export default Home;