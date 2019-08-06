/**
 * @jest-environment node
 */

jest.setTimeout(20000);
const request = require('supertest');
const app = require('../app');
const { User } = require('../users/models');

const userOne = {
  username: "bigjilm",
  password: "P@55word"
}

// beforeEach(async () => {
//   await User.deleteMany({});
//   await new User(userOne).save();
// })

test('Should sign up new user', async () => {
  const user = await request(app).post('/users').send(userOne).then((user) => expect(user).toContain(object))
})

test('Should get deck', async () => {
  await request(app).get('/tarotDeck').send().expect(200)
})

test('Should return 404 for nonpage', async () => {
  await request(app).get('/admin').send().expect(404)
})