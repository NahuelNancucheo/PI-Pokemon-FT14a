const axios = require('axios');
const {v4: uuidv4} = require('uuid');
const { Pokemon, Type } = require('../db');
const {
    API_HOME,
    SERVER_URL,
    SERVER_PORT
} = require('../constants');


/*
-get all pokemons -> concatenar api con db(recibo por query)
-get pokemons por id 
-get pokemons por name
-crear pokemon -> que no se repita el name //controlar que pase el name por body

function getApi ()  {
    return axios.get(`${API_HOME}?limit=${LIMIT_OF_POKEMONS}`) // preguntar si puedo usar limits o tengo que hacer doble request a la api
    .then((response) => {return response.data.results})
    .catch((err) => console.error(err));
};
*/

async function getAllPokemons(req, res, next) {
    const { name } = req.query;
    //busco en api
    //const pokeApi = await ;
    //busco en db
    const pokeMine = await Pokemon.findAll({include: Type});
    
    //devuelvo todo//HACER EL GET API DE NUEVO!!
    Promise.all([ pokeMine])
        .then(response => {
            let [ pokeMineRes] = response;
            return pokeMineRes
        })
        .then(pokeList => res.send(pokeList));
};

function getPokemonByID(req, res, next) {
    const {idPokemon} = req.params;

    return axios.get(`${API_HOME}/${idPokemon}`)
        .then(response => res.json(response.data.stats))
};

async function createPokemon(req, res, next) {
    const name = req.body.name;
    const {hp, attack, defense, speed, height, weight, types, spriteSrc} = req.body;
    console.log(hp);

    try {
        const newPokemon = await Pokemon.create({
            name, 
            hp,
            attack,
            defense,
            speed,
            height,
            weight,
            spriteSrc
        });
        res.json(newPokemon)
    } catch(err) {
        console.error(err);
    }

};

module.exports = {
    getAllPokemons,
    getPokemonByID,
    createPokemon
}