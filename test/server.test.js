/**
 * @jest-environment node
 */

const request = require('supertest');
const { app } = require('../server');
const { User } = require('../users/models');

const userOne = {
  username: 'bigjilm',
  password: 'P@55word'
}

beforeEach(async () => {
  await User.deleteMany();
  await new User(userOne).save();
})

test('Should sign up new user', async () => {
  await request(app).post('/users/').send({
    username: 'billy',
    password: 'P@55word'
  }).expect(201)
})