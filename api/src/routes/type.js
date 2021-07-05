const { Router } = require('express');
const router = Router();
//importar controladores correspondientes

router.get('/', function(req, res) {
    res.send('Soy un get type :)')
});


module.exports = router;