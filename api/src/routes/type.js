const { Router } = require('express');
const router = Router();
//importar controladores correspondientes
const {getAllTypes} = require('../controllers/type');

router.get('/', getAllTypes);


module.exports = router;