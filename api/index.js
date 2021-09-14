//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const { default: axios } = require('axios');
const { API_TYPES } = require('../api/src/constants');
const { Type } = require('../api/src/db');

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  console.log("correcta conexion con la base de datos")
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});

//pido los types a la api y los guardo en mi db
/*
const typesdb = axios
    .get(`${API_TYPES}`)
    .then(response => {
        const types = response.data.results

        types.forEach(e => {
            Type.create({ name: e.name })
                .catch(err => console.log(err))
        })
        return console.log('get apitypes done')
    })
    .catch(err => console.log(err))

Promise.all([typesdb]).then(() => console.log('types successfully loaded in db'))
*/
