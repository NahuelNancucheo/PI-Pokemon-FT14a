import React from 'react';
import {Link} from 'react-router-dom';
//import { v4 as uuidv4, v4 } from 'uuid';
import './styles.css';
import Pokebola from '../../assets/pokebola.png'

function Card({name, img, id, types}) {


    return (
        <div className='card'>
            {img ? (<img src={`${img}`} alt={`${name} imagePkmn`}/>) : (<img src={Pokebola} alt='not found'/>)}
            <p className='name'>{name}</p>
            <div className='types'>
                <p>Type</p>
                {types && types.map(t => <span key={t.name}>{t.name}</span>)}
            </div>
            <Link to={`/home/pokemons/${id}`}>
                <button className='btn-more'>More details</button>
            </Link>
        </div>
    )
};

export default Card;