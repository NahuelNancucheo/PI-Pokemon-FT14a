import React from 'react';
//import styles

function Caracs(props) {
    const {error, img, name, types, hp, attack, defense, speed, height, weight, id} = props.pokemon;

    return (
        <div className='home' >
            {error ? (
                <p>{error}</p>
            ) : (
                <div className='specs'>
                    <img src={`${img}`} alt='pokemon-img' />
                    <div className='stats'>
                    <h2>{name}</h2>
                    <p>
                        <span>Vida: </span>
                        {hp}
                    </p>
                    <p>
                        <span>Ataque: </span>
                        {attack}
                    </p>
                    <p>
                        <span>Defensa: </span>
                        {defense}
                    </p>
                    <p>
                        <span>Velocidad: </span>
                        {speed}
                    </p>
                    <p>
                        <span>Altura: </span>
                        {height}
                    </p>
                    <p>
                        <span>Peso: </span>
                        {weight}
                    </p>
                    <p>
                        <span>ID: </span>
                        {id}
                    </p>
                    <h2>{types && types.map(t => t.name)}</h2>
                    </div>
                </div>
            )}
        </div>
    )
};

export default Caracs;