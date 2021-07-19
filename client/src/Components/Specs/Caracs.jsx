import React from 'react'
import Pokebola from '../../assets/pokebola.png'

function Caracs(props) {
    const {error, img, name, hp, attack, defense, speed, height, weight, id} = props.pokemon;

    return (
        <>
            {error ? (
                <p>{error}</p>
            ) : (
                <div className='specs'>
                    {img ? (<img src={`${img}`} alt={`${name} imagePkmn`}/>) : (<img src={Pokebola} alt='not found'/>)}
                    <div className='stats'>
                    <h2>{name}</h2>
                    <p>
                        <span>ID: </span>
                        {id}
                    </p>
                    <p>
                        <span>Health: </span>
                        {hp}
                    </p>
                    <p>
                        <span>Attack: </span>
                        {attack}
                    </p>
                    <p>
                        <span>Defense: </span>
                        {defense}
                    </p>
                    <p>
                        <span>Speed: </span>
                        {speed}
                    </p>
                    <p>
                        <span>Height: </span>
                        {height}
                    </p>
                    <p>
                        <span>Weight: </span>
                        {weight}
                    </p>
                    </div>
                </div>
            )}
        </>
    )
};

export default Caracs;