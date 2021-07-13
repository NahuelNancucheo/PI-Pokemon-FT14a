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
                    <h2>{types && types.map(t => t.name)}</h2>
                    <h2>{hp}</h2>
                    <h2>{attack}</h2>
                    <h2>{defense}</h2>
                    <h2>{speed}</h2>
                    <h2>{height}</h2>
                    <h2>{weight}</h2>
                    <h2>{id}</h2> 
                    </div>
                </div>
            )}
        </div>
    )
};

export default Caracs;