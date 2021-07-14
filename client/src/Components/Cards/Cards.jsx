import React, { useState, useEffect } from 'react';
//import card adn styles
import Card from '../Card/Card';

function Cards({show}) {


    return (
        <div>
            {show && show.map((p => (
                <li key={p.id}>
                    <Card
                        name={p.name}
                        img={p.img}
                        id={p.id}
                        types={p.types}
                    />
                </li>
            )))}
        </div>
    )
};

export default Cards;