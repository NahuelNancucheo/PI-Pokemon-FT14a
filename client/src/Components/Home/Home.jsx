import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, getTypes } from '../../actions/index';
//import styles
//import components
import Filters from '../Filters/Filters';
import Cards from '../Cards/Cards';
import Pagination from '../Pagination/Pagination';

function Home() {
    const [currentPage, setCurrentPage] = useState(1);
    const [pokmnPerPage, setPokmnPerPage] = useState(12);

    const dispatch = useDispatch();
    const pokemonsShowed = useSelector(store => store.pokemonsShowed);//aca tengo que usar los estados del store ya que los cargue en la alnding page

    useEffect(() => {
        //dispatch(getPokemons()); NO ES NECESARIO YA QUE LOS CARGUÉ EM LA LANDING PAGE :D
        //dispatch(getTypes());
    },[]);

    //get current pokemons
    const indexOfLastPokmn = currentPage * pokmnPerPage;
    const indexOfFirstPokmn = indexOfLastPokmn - pokmnPerPage;
    const currentPokmn = pokemonsShowed.slice(indexOfFirstPokmn, indexOfLastPokmn);

    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return(
        <div className='home'>
            <Filters />
            {pokemonsShowed[0] ? (<Cards className='card' show={currentPokmn} />) : (<h2>Loading...</h2>)}
            <Pagination pokmnPerPage={pokmnPerPage} totalPokmn={pokemonsShowed.length} paginate={paginate} />
        </div>
    );
};

export default Home;