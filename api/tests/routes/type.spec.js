const { expect } = require('chai');
const assert = require('assert');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Type, conn } = require('../../src/db.js');

const agent = session(app);

describe('Type routes', () => {
    before(() =>
        conn
        .authenticate()
        .catch((err) =>
            console.error('Unable to connect to the database:', err)
        )
    );

    describe('GET /types', () => {
        it('Should get 200', () => agent.get('/types').expect(200));
        it('Should get a json Content.type', () => 
            agent.get('/types').expect('Content-type', /json/).expect(200)
        );
        it('Should insert from api types to our DB', (done) => {
            agent
            .get('/types')
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => response.body)
            .then(types => {
                assert.ok(types.length >= 19)
                done()
            })
            .catch(err => done(err))
        });
    });
});