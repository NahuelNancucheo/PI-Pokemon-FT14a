import React from 'react';
import {Link} from 'react-router-dom';
//impor styles

function Card({name, img, id, types}) {

    return (
        <div className='card'>
            <img src={`${img}`} alt={`${name} image`}/>
            <p className='name'>{id}</p>
            <p className='name'>{name}</p>
            <div className='types'>
                <p>Tipos</p>
                {types && types.map(t => <span key={`${t.name}`}>{t.name}</span>)}
            </div>
            <Link to={`/home/pokemons/${id}`}>
                <button className='btn-more'>Mas detalles</button>
            </Link>
        </div>
    )
};

export default Card;