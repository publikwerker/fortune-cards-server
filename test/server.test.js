/**
 * @jest-environment node
 */

jest.setTimeout(20000);
const request = require('supertest');
const app = require('../app');
const { User } = require('../users/models');
const { closeServer } = require('../server');
const { 
  userOne,
  userOneId,
  userTwo,
  userTwoId,
  setUpDatabase
} = require('./fixtures/db.js');

beforeEach( setUpDatabase );

afterEach( async () => {
  await closeServer();
})

test('Should sign up new user', async () => {
  const response = await request(app)
    .post('/users')
    .send(userTwo)
    .expect(201);

  // Assert that the database was changed correctly
  const user = await User.findById(response.body.user.userId)
  expect(user).not.toBeNull();

  // Assertions about response body
  expect(response.body.user).toMatchObject({
    username: 'billy',
    history: [],
    userId: response.body.user.userId
  })
})

test('Should reject duplicate username', async () => {
  await request(app).post('/users').send(userOne).expect(500)
})

test('Should get deck', async () => {
  await request(app).get('/tarotDeck').send().expect(200)
})

test('Should return 404 for nonpage', async () => {
  await request(app).get('/admin').send().expect(404)
})

test('Should login existing user', async () => {
  const response = await request(app)
    .post('/users/login')
    .send({
      username: userOne.username,
      password: userOne.password
    }).expect(200);

  const user = await User.findById(userOneId);
  console.log(user);
  expect(user.tokens[1].token).toBe(response.body.token);
})

test('Should not login nonexistent user', async () => {
  await request(app)
    .post('/users/login')
    .send({
      username: "melbo",
      password: "P@ssword123"
    }).expect(400);
})