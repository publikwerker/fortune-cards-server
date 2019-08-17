/**
 * @jest-environment node
 */

 /**
 * @jest-environment node
 */

jest.setTimeout(20000);
jest.retryTimes(5);
const request = require('supertest');
const app = require('../app');
const { User } = require('../users/models');
const { closeServer } = require('../server');
const { 
  userOne,
  userOneId,
  userTwo,
  userThree,
  setUpDatabase
} = require('./fixtures/db.js');

beforeEach( setUpDatabase );

afterEach( async () => {
  await closeServer();
})

test('Should save new reading', async () => {
  await request(app)
    .put('/auth/reading')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send({
      username: userOne.username,
      query: 'How soon?',
      cardsDealt: [{one: 1}, {two: 2}],
      comments: 'Test comments'
    })
    .expect(201)
})