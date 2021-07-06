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

//como hacer para no hacer tantos request
async function getApi() {
    try {
    const pokemonsList = await axios.get(`${API_HOME}?limit=40`)
    let pokemonsData = [];

    for(obj of pokemonsList.data.results) {
        let dataObj = await axios.get(`${obj.url}`);
        pokemonsData.push({
            id: dataObj.data.forms[0].name,
            name: dataObj.data.forms[0].name,
            img: dataObj.data.sprites.other.dream_world.front_default,
            types: dataObj.data.types.map((type) => type.type.name)
        })
    }
    return pokemonsData;
    } catch(err) {
        console.log(err);
    }
    
};

async function getAllPokemons(req, res, next) {
    const { name } = req.query;
    //busco en api
    const pokeApi = await getApi() ;
    //busco en db
    const pokeMine = await Pokemon.findAll({include: Type});
    
    //aca tengo que mostrar name, id y types
    Promise.all([pokeApi, pokeMine])
        .then(response => {
            let [ pokeApiRes, pokeMineRes] = response;
            return pokeApiRes.concat(pokeMineRes);
        })
        .then(pokeList => res.send(pokeList));
};

function getPokemonByID(req, res, next) {
    const idPokemon = req.params.idPokemon;
    //console.log(req.params.idPokemon)
    
    //if(isNumber){} => busco api
    //if(isUUid){} => busco db

    return axios.get(`${API_HOME}/${idPokemon}`)
        .then(response => res.json(response.data.stats)) //aca me tengor que traer los stats de cad apokemon
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
        res.json(newPokemon) //falta .add o settpyes los types en la db
    } catch(err) {
        console.error(err);
    }

};

module.exports = {
    getAllPokemons,
    getPokemonByID,
    createPokemon
}