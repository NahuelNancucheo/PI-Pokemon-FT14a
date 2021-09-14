import React from 'react';
import { useEffect, useState } from 'react';


export const PokemonQuiz = () => {

    const [state, setstate] = useState(initialState)

    return (
        <div className="mainDiv">
            <div className="gameScreen">
                {}
                <div className="imgdiv">
                    {}
                    {}
                </div>

                <div className="secondDiv">

                </div>

                <div className="thirdDiv">

                </div>

                <div className="fourthDiv">
                    <h1>Score: </h1>
                    <div></div>
                </div>

                <div className="gameoverScreen">
                    <img></img>
                    <button></button>
                </div>

            </div>
        </div>
    )
}
