const { Router } = require('express');
const router = Router();
//importo controladores
const {getAllPokemons, getPokemonByID, createPokemon} = require('../controllers/pokemon');

//asigno controladores
router.get('/', getAllPokemons);
router.get('/:idPokemon', getPokemonByID);
router.post('/', createPokemon);


module.exports = router;