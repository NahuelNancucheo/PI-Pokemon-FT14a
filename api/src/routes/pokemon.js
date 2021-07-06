const { Router } = require('express');
const router = Router();
//importo controladores
const {getAllPokemons, getPokemonByID, createPokemon} = require('../controllers/pokemon');

//asigno controladores
router.get('/', getAllPokemons);
router.get('/:id', getPokemonByID);
router.post('/', createPokemon);


module.exports = router;