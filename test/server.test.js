'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;

chai.use(chaiHttp);

const {app} = require('../server');


describe('Reality Check', () => {
  it('true should be true', () => {
    expect(true).to.be.true;
  });

  it('2 + 2 should equal 4', () => {
    expect(2 + 2).to.equal(4);
  });
});

describe('Basic express setup', () => {
  it('GET request "/" should return deck', () => {
    return chai.request(app)
    .get('/tarotDeck')
    .then( (res) => {
      expect(res).to.exist;
    });
  });

});