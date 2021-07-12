const { default: axios } = require('axios');
const { Type } = require('../db');
const { API_TYPES } = require('../constants');
/*
const typesdb = axios
    .get(`${API_TYPES}`)
    .then(response => {
        const types = response.data.results

        types.forEach(e => {
            Type.create({ name: e.name })
                .catch(err => res.send(err))
        })
        return console.log('get apitypes done')
    })
    .catch(err => res.send(err))

Promise.all([typesdb]).then(() => console.log('types loaded in db'))
*/


function getAllTypes(req, res, next) {
    Type.findAll()
        .then((response) => res.json(response))
        .catch((err) => next(err));
};

module.exports = {
    getAllTypes
}