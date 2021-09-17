import React from 'react';
import { NavBar, NavLink, Bars, NavMenu } from './styled';


function Nav() {

    return (
        <>
            <NavBar>
                <NavLink to='/home/pokemons'>
                   <h3>Pokemon App</h3> 
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to='/home/pokemon/create'>
                        Create a Pokemon
                    </NavLink>
                    <NavLink to='/'>
                        Landing page
                    </NavLink>
                    <NavLink to='/home/pokemonquiz'>
                        Who's that Pokemon?
                    </NavLink>
                </NavMenu>
            </NavBar>
        </>
    );
};

export default Nav;