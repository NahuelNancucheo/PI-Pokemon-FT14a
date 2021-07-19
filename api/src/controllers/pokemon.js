const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const { Pokemon, Type } = require('../db');
const { API_HOME } = require('../constants');

//obtengo de la api, doble request
async function getApi() {
    try {
        const pokemonsList = await axios.get(`${API_HOME}?limit=40`)
        let pokemonsData = [];

        for (obj of pokemonsList.data.results) {
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
                types: dataObj.data.types.map((t) =>{return {name:t.type.name}})
            })
        }
        return pokemonsData;
    } catch (err) {
        console.log(err);
    }

};

//traigo todos y y si hay name, busco por name
async function getAllPokemons(req, res, next) {
    const { name } = req.query;

    if(name) {
        //busco api
        return axios.get(`${API_HOME}/${name}`)
        .then(r => {
            let pokemonSearched = {
                id: r.data.id,
                name: r.data.forms[0].name,
                img: r.data.sprites.other.dream_world.front_default,
                height: r.data.height,
                weight: r.data.weight,
                hp: r.data.stats[0].base_stat,
                attack: r.data.stats[1].base_stat,
                defense: r.data.stats[2].base_stat,
                speed: r.data.stats[5].base_stat,
                types: r.data.types.map((t) =>{return {name:t.type.name}})
            }
            res.json(pokemonSearched)
        }) 
        .catch(() => {
            //busco db
            Pokemon.findOne({
                where: {
                    name: name
                },
                include: [
                    { model: Type, attributes: ["name"], through: { attributes: [] } }
                ]
            })
            .then((r) => {
				if (r) {
					return res.send(r);
				}
				return res.status(404).send({error: 'pokemon not found'});
			});    
        })
        .catch(()=>{
            next({ status: 404, message: 'Pokemon not found' })
        })
    };

    //Armo la lista de pokemons que voy a mostrar en home
    const pokeApi = await getApi();
    let pokeMine = await Pokemon.findAll({ include: [
        { model: Type, attributes: ["name"], through: { attributes: [] } }
        ]
    });

    Promise.all([pokeApi, pokeMine])
    .then(response => {
        let [pokeMineRes, pokeApiRes] = response;
        return pokeApiRes.concat(pokeMineRes);
    })
    .then(pokeList => { //-> lista completa de 40 pokemons
        return res.json(pokeList);
    })
    .catch(() => {
        next({ status: 404, message: 'Pokemon not found' })
    })  
};

function getPokemonByID(req, res, next) {
    const idPokemon = req.params.id;
    //testeo regExp que me mandan por params
    const numberTest = /^[0-9]+$/.test(idPokemon);
    const uuidTest = /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/.test(idPokemon);

    //if number = true
    if (numberTest) {
        return axios.get(`${API_HOME}/${idPokemon}`)
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
                    types: r.data.types.map((t) =>{return {name:t.type.name}})
                }
                res.json(pokemon);
            })
            .catch(() => {
                next({ status: 404, message: 'Pokemon not found' })
            })
    };

    //if uuid = true
    if (uuidTest) {
        return Pokemon.findByPk(idPokemon, {include: Type})  // or Pokemon.findOne({ where: { id: idPokemon }, include: { model: Type } })
            .then(r => res.json(r))
            .catch(() => {
                next({ status: 404, message: 'Pokemon not found' })
            })
    };

    return next({ status: 404, message: 'That Pokemon does not exist' })
};

async function createPokemon(req, res, next) {
    const { name, hp, attack, defense, speed, height, weight, types, img } = req.body;

    try {
        let newPokemon = await Pokemon.create({
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

        let matchingTypes = await Type.findAll({where:{name: types}})
        
        await newPokemon.setTypes(matchingTypes)
        matchingTypes = matchingTypes.map(t => {return {name: t.dataValues.name, id: t.dataValues.id}})//
        newPokemon = {...newPokemon.dataValues, types: matchingTypes}
        //retorno el newpokemon completo
        return res.json(newPokemon);
    } catch (err) {
        console.error(err);
        next(err);
    }
};

module.exports = {
    getAllPokemons,
    getPokemonByID,
    createPokemon
}



    /*
    nameExist = await Pokemon.findOne({where:{name:name}}) 
    if(nameExist) {
        return res.status(404).send('el pokemon ya existe') 
    }
    
    */