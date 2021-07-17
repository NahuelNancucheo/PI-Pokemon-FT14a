import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, getTypes } from '../../actions/index';
import LandingStyle from './styled';

function LandingPage() {
    const dispatch = useDispatch();
    const pokemonsLoaded = useSelector(store => store.pokemonsLoaded);

    useEffect(() => {
        dispatch(getPokemons());
        dispatch(getTypes);
    },[dispatch]);

    return (
        <LandingStyle>
            <section>
                <div className='content'>
                    <h2>BIENVENIDO A POKEMON APP</h2>
                    <p>esto es la descripcion del proyecto individual</p>
                    {pokemonsLoaded && (
                        <Link to='/home/pokemons' className='link'>
                        Go!
                        </Link>
                    )}
                </div>
                <p className='copyRight'>Copyright ©2021</p>
            </section>
        </LandingStyle>
        
    );
};

export default LandingPage;