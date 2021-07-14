import React from 'react';
import {Link} from 'react-router-dom';
//impor styles

function Card({name, img, id, types}) {

    return (
        <div className='card'>
            {img ? (<img src={`${img}`} alt={`${name} image`}/>) : (<img src='https://quizizz.com/media/resource/gs/quizizz-media/quizzes/64b606bc-b417-40fd-aabc-f86810fe4399?w=200&h=200' alt='not found'/>)}
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