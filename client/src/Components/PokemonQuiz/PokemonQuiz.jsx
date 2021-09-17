import React from 'react';
import { useEffect, useState } from 'react';
import Pokeball from '../../assets/pokebola.png';
import Gameover from '../../assets/gameover.png';
import styles from './PokemonQuiz.module.css';

export const PokemonQuiz = () => {

    const [imageSrc, setimageSrc] = useState("")
    const [pokeArrayNames, setpokeArrayNames] = useState([])
    const [pokemonOnScreen, setpokemonOnScreen] = useState("")
    const [randomNum, setrandomNum] = useState("")
    const [showOptions, setshowOptions] = useState(true)
    const [showMatch, setshowMatch] = useState(false)
    const [showWrong, setshowWrong] = useState(false)
    const [blackImg, setblackImg] = useState(true)
    const [Score, setScore] = useState(0)
    const [lives, setlives] = useState([1,2,3])
    const [gameOver, setgameOver] = useState(false)

    const randoms = [...Array(4)].map(() => Math.ceil(Math.random() * 152))

    useEffect(() => {
        fetchFunc()
    }, [])

    useEffect(() => {
        if(lives.length === 0) {
            setgameOver(true)
        }
    }, [lives])

    useEffect(() => {
        if(randomNum !== 0) {
            //busco la img del pokemon en random num y lo seteo en setimagesrc
            setimageSrc(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${randomNum}.svg`)

            fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
            .then(res => res.json())
            .then(data => setpokemonOnScreen(data.name))
        }
 
    }, [randomNum])

    //functions
    const fetchFunc = () => {
        setrandomNum(randoms[Math.floor(Math.random() * 4)])
        console.log(randoms)

        randoms.map(x => {
            return(
                fetch(`https://pokeapi.co/api/v2/pokemon/${x}`)
                .then(res => res.json())
                .then(data => setpokeArrayNames(items => [...items, [x, data.name]]))
            )
        })
    }

    const clickHandler = (id, index) => {
        setshowOptions(false)
        setblackImg(false)

        if(randomNum === id) {
            setshowMatch(true)
            setScore(prevCount => prevCount + 1)
        } else {
            setshowWrong(true)
            setlives(lives.filter((x,i) => i !== 0))
        } 
    }

    const clickHandler2 = () => {
        setimageSrc('')
        setblackImg(true)
        fetchFunc()
        setpokeArrayNames([])
        setshowWrong(false)
        setshowMatch(false)
        setshowOptions(true)
    }

    const refreshGame = () => {
        setimageSrc('')
        setblackImg(true)
        fetchFunc()
        setpokeArrayNames([])
        setshowWrong(false)
        setshowMatch(false)
        setshowOptions(true)
        setgameOver(false)
        setScore(0)
        setlives([1,2,3])
    }

    return (
        <div className={styles.mainDiv}>
            <div className="gameScreen">
                {!gameOver && <div className="game"> 
                    <div className={styles.imgdiv}>
                        {blackImg && <img style={{filter:"contrast(0%) brightness(0%)" }} src={imageSrc} alt="pokeImg" />}
                        {!blackImg && <img src={imageSrc} alt="pokeImg" />}
                    </div>

                    <div className={styles.secondDiv}>
                        {showOptions && pokeArrayNames.map((x, index) => {
                            return(
                                <div className={styles.optionDiv} onClick={() => clickHandler(x[0], index)} key={index} ><h3>{x[1].toUpperCase()}</h3></div>
                            )
                        })}
                    </div>

                    <div className={styles.thirdDiv}>
                        {showMatch && <div className={styles.match}><h1>Matched!</h1></div>}
                        {showWrong && <div className={styles.wrong}><h1>Wrong! </h1><h4>It's {pokemonOnScreen.toUpperCase()}</h4></div>}
                        {!showOptions && <div className={styles.next} onClick={clickHandler2}><h3>Next Quiz</h3></div>}
                    </div>

                    <div className={styles.fourthDiv}>
                        <h1>Score: {Score}</h1>
                        <div><h1>Lives: </h1>{lives.map(x => <img key={x} id={x} className={styles.pokeballImg} src={Pokeball} alt="pokeball img" />)}</div>
                    </div>
                </div>}
                {gameOver && <div className={styles.gameoverScreen}>
                        <img src={Gameover} alt="game over" />
                        <h1>Your Score: {Score}</h1>
                        <button onClick={refreshGame} >Try Again</button>
                    </div>}
            </div>
        </div>
    )
}
