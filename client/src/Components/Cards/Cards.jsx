import React, { useState, useEffect } from 'react';
//import card adn styles

function Cards({show, loading}) {
    if(loading) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            {show.map((p => (
                <div key={p.id}>
                    <p>{p.name}</p>
                    <img src={`${p.img}`} alt={`${p.name} img`}/>
                    <p>{p.id}</p>
                    <p>{p.types.map(t => t.name)}</p>
                </div>
            )))}
        </div>
    )
};

export default Cards;