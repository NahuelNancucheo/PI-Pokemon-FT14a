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
                    <NavLink to='/home/pokemon/create' activeStyle>
                        Create a Pokemon
                    </NavLink>
                    <NavLink to='/landing' activeStyle>
                        Landing page
                    </NavLink>
                    <NavLink to='/about' activeStyle>
                        About
                    </NavLink>
                </NavMenu>
            </NavBar>
        </>
    );
};

export default Nav;