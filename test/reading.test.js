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
  readingOne,
  readingOneId,
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

test('Should save new reading', async () =>{
  const response = await request(app)
    .put('/auth/reading')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send(readingOne)
    .expect(201)  
})