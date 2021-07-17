import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const [show, setShow] = useState(false);
    const toggle = () => {
        setShow(!show);
    }

    return (
        <nav>
            <div>
                <Link to='/home/pokemons' className='logo'>PokemonApp</Link>
            </div>
            <div className='navigation'>
                <ul>
                    <li>
                    <Link to='/home/pokemon/create' className='link' onClick={() => toggle()}>Crear Pokemon</Link>
                    </li>
                    <li>
                        <Link to='/' className='link' onClick={() => toggle()}>Landing Page</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;

/*

 */