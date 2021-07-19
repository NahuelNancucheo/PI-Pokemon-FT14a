import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, getTypes } from '../../actions/index';
import LandingStyle from './styled';
import Charizard from '../../assets/Charizard_SSBU.png'

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
                <img src={Charizard} className='bg' />
                <div className='content'>
                    <h2>Welcome to the Pokemon App</h2>
                    <p>
                        This project is part of Henry Labs where we integrate all the knowledge acquired in the bootcamp. Technologies used:
                        React | Redux | Express | NodeJS | Sequelize | PostgreSQL.
                    </p>
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