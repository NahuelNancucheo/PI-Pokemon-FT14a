/* eslint-disable import/no-extraneous-dependencies */
const { expect, assert } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, Type, conn } = require('../../src/db.js');
const { v4: uuidv4 } = require('uuid');

const agent = session(app);
const pokemon = {
  id: uuidv4(),
  name: 'ash',
  weight: 250,
  height: 25
};

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
  }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)))

  describe('GET /pokemons', () => {
    it('should get 200', (done) => {
      agent
      .get('/pokemons')
      .expect(200)
      .expect('Content-Type', /json/)
      done()
    });
  });

  describe('GET /pokemons?name=something', () => {
    it('Should can handle query params', () => 
      agent
      .get('/pokemons?name=bulbasaur')
      .expect(200)
      .expect('Content-Type', /json/)
    );
    it('Should can search in our DB', () => 
      agent.get('/pokemons?name=ash')
    );
    it('should response with 404 if the pokemon is not found', () => 
      agent.get('/pokemons?name=homero').expect(404)
    );
  })

  describe('GET /pokemons/:idPokemon', () => {
    it('Should get 200', (done) => {
      agent.get('/pokemons/3').expect(200)
      done()
    });
    it('Should response with 404 if the pokemon is not found', (done) => {
      agent.get('/pokemons/imnotarealpokemon').expect(404)
      done()
    })
  });

  describe('POST /pokemons', () => {
    it('Should create a new pokemon', (done) => {
      agent.post('/pokemons').send(pokemon).expect(200);
      done();
    });
    it('Should correctly set the types in DB', (done) => {
      agent
      .post('/pokemons')
      .send({
        name:'pueblopaleta',
        hp:100,
        attack:400,
        defense:150,
        speed:50,
        height:80,
        weight:160,
        types: "fire"
      })
      .then(() => {
        return Pokemon.findOne({
            where:{ name:'pueblopaleta' },
            include: { model: Type}
          });
        })
      .then(pokemonCreated => {
        expect(pokemonCreated.types[0].name).to.equal('fire');
        expect(pokemonCreated.weight).to.equal(160)
      });
      done()
    })
  });
});
