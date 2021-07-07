const axios = require('axios');
const {v4: uuidv4} = require('uuid');
const { Pokemon, Type } = require('../db');
const { API_HOME } = require('../constants');

/*
-get all pokemons -> concatenar api con db(recibo por query)
-get pokemons por id 
-get pokemons por name
-crear pokemon -> que no se repita el name //controlar que pase el name por body
*/

//como hacer para no hacer tantos request
async function getApi() {
    try {
    const pokemonsList = await axios.get(`${API_HOME}?limit=40`)
    let pokemonsData = [];

    for(obj of pokemonsList.data.results) { 
        let dataObj = await axios.get(`${obj.url}`);
        pokemonsData.push({
            id: dataObj.data.id,
            name: dataObj.data.forms[0].name,
            img: dataObj.data.sprites.other.dream_world.front_default,
            height: dataObj.data.height,
            weight: dataObj.data.weight,
            hp: dataObj.data.stats[0].base_stat,
            attack: dataObj.data.stats[1].base_stat,
            defense: dataObj.data.stats[2].base_stat,
            speed: dataObj.data.stats[5].base_stat,
            types: dataObj.data.types.map((t) => t.type.name)
        })
    }
    return pokemonsData;
    } catch(err) {
        console.log(err);
    }
    
};

async function getAllPokemons(req, res, next) {
    const name = req.query.name;
    //busco en api
    const pokeApi = await getApi() ;
    //busco en db
    const pokeMine = await Pokemon.findAll({include: Type});
    
    Promise.all([pokeApi, pokeMine])
        .then(response => {
            let [ pokeApiRes, pokeMineRes] = response;
            return pokeApiRes.concat(pokeMineRes);
        })
        .then(pokeList => { // [{api},{mine},{mine}] -> lista completa
            //searchByName
            if(name) {
                const pokemonSearch = pokeList.find(p => p.name === name.toLowerCase());
                return res.json(pokemonSearch);
            }
            //byusers
            //byapi
            return res.json(pokeList);
        });

};

function getPokemonByID(req, res, next) {
    const idPokemon = req.params.id;
    //testeo que me mandan por params
    const numberTest = /^[0-9]+$/.test(idPokemon);
    const uuidTest = /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/.test(idPokemon);
    
    
        axios.get(`${API_HOME}/${idPokemon}`)
        .then(r => {
            let pokemon = {
                id: r.data.id,
                name: r.data.forms[0].name,
                img: r.data.sprites.other.dream_world.front_default,
                height: r.data.height,
                weight: r.data.weight,
                hp: r.data.stats[0].base_stat,
                attack: r.data.stats[1].base_stat,
                defense: r.data.stats[2].base_stat,
                speed: r.data.stats[5].base_stat,
                types: r.data.types.map(t => t.type.name)
            }
            res.send(pokemon);
        })
        //arreglar tantos catch
        .catch((err) => {
			Pokemon.findOne({
				where: {
					id: idPokemon,
				},
			})
				.then((r) => {
					res.send(r);
				})
				.catch((err) => {
					res.status(200).send({error: 'pokemon not found'});
				});
		})
		.catch((err) => {
			res.status(400).send({error: err});
		});
    /*
    else {
        Pokemon.findByPk(idPokemon)
        .then(r => res.json(r))
        .catch(() => next({status: 404, message: 'Pokemon not found'}));
    }
    */

    /*
    if(uuidTest){
        Pokemon.findOne({
            where: {
                id: idPokemon
            }
        })
        .then(r => {res.send(r)})
        .catch(() => next({status: 404, message: 'Pokemon not found'}));
    };
    
    return next({
        status: 404,
        message: 'That pokemon does not exist, yet'
    });
    */
};

async function createPokemon(req, res, next) {
    const {name, hp, attack, defense, speed, height, weight, types, img} = req.body;

    //if(buscar si el name ingresado ya existe en api o db?)
    try {
        let newPokemon = await Pokemon.create({ //tabla pokemon-----poketype-------types
            id: uuidv4(),
            name: name.toLowerCase(), 
            hp,
            attack,
            defense,
            speed,
            height,
            weight,
            img
        });
        //await newPokemon.setTypes(types);//.add o settpyes los types en la db
        //await newPokemon.addTypes(types);
        console.log(newPokemon);
        return res.json(newPokemon);
    } catch(err) {
        console.error(err);
        next(err);
    }

};

module.exports = {
    getAllPokemons,
    getPokemonByID,
    createPokemon
}