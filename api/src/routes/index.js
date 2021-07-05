const { Router } = require('express');
// Importo todos los routers;
const pokemonRoutes = require('./pokemon');
const typeRoutes = require('./type');

const router = Router();

// Configuro los routers
router.use('/pokemon', pokemonRoutes);
router.use('/type', typeRoutes);

module.exports = router;
