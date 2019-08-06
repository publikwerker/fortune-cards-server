/**
 * @jest-environment node
 */

jest.setTimeout(20000);
const request = require('supertest');
const app = require('../app');
const { User } = require('../users/models');
const { runServer, closeServer } = require('../server');

const userOne = {
  username: "bigjilm",
  password: "P@55word"
}

const userTwo = {
  username: "billy",
  password: "P@55word"
}

beforeEach( async () => {
  await runServer();
  await User.deleteMany({});
  await new User(userOne).save();
})

afterEach( async () => {
  await closeServer();
})

test('Should sign up new user', async () => {
  const user = await request(app).post('/users').send(userTwo);
  console.log(user);
  expect(user.body.username).toBe("billy")
})

test('Should get deck', async () => {
  await request(app).get('/tarotDeck').send().expect(200)
})

test('Should return 404 for nonpage', async () => {
  await request(app).get('/admin').send().expect(404)
})