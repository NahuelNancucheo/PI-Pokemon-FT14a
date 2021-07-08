const { Router } = require('express');
const router = Router();
//importar controladores correspondientes
const {getAllTypes, typesDB} = require('../controllers/type');

router.get('/', getAllTypes);


module.exports = router;