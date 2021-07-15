import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, getTypes } from '../../actions/index';
//import styles an img from assets

function LandingPage() {
    const dispatch = useDispatch();
    const pokemonsLoaded = useSelector(store => store.pokemonsLoaded);

    useEffect(() => {
        dispatch(getPokemons());
        dispatch(getTypes);
    },[]);

    return (
        <section>
            <div>
                <h2>BIENVENIDO A POKEMON APP</h2>
                <p>esto es la descripcion del proyecto individual</p>
                {pokemonsLoaded && (
                    <Link to='/home/pokemons' className='link'>
                    IR
                    </Link>
                )}
            </div>
            <p>copyright 2021</p>
        </section>
    );
};

export default LandingPage;