/**
 * @jest-environment node
 */

jest.setTimeout(20000);
const request = require('supertest');
const app = require('../app');
const { User } = require('../users/models');

const userOne = {
  username: 'bigjilm',
  password: 'P@55word'
}

// beforeEach(async (done) => {
//   await User.deleteMany({});
//   await new User(userOne).save();
//   done();
// })

test('Should sign up new user', async () => {
  await request(app).post('/users/').send({
    "username": "billy",
    "password": "P@55word"
  }).then((res) => expect(res.status).toBe(201))
})

test('Should get deck', async () => {
  await request(app).get('/tarotDeck').send().expect(200)
})

test('Should return 404 for nonpage', async () => {
  await request(app).get('/admin').send().expect(404)
})