const { default: axios } = require('axios');
const { Type } = require('../db');
const {v4: uuidv4} = require('uuid');
const { API_TYPES } = require('../constants');

//VER COMO IR A BUSCAR A LA DB
function typesDB(req, res, next) {
    axios.get(`${API_TYPES}`)
    .then(response => {
        const types = response.data.results

        types.forEach(e => {
            Type.create({id: uuidv4(), name: e.name})
            .catch(err => res.send(err) )
        })
        return res.status(200).json(types)
    })
    .catch(err => res.send(err))
    
};

function getAllTypes(req, res, next) {
    Type.findAll()
    .then((response) => res.json(response))
    .catch((err) => next(err));
};


module.exports = {
    getAllTypes,
    typesDB
}