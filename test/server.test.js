/**
 * @jest-environment node
 */

 jest.setTimeout(10000);
const request = require('supertest');
const app = require('../app');
const { User } = require('../users/models');
const { runServer, closeServer } = require('../server');
const { 
  userOne,
  userOneId,
  userTwo,
  userThree,
  setUpDatabase
} = require('./fixtures/db.js');

let server;

beforeAll( async () => {
  await runServer(); 
});

beforeEach(setUpDatabase);

afterAll( async () => {
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
  expect(user.tokens[1].token).toBe(response.body.token);
})

test('Should not login nonexistent user', async () => {
  await request(app)
    .post('/users/login')
    .send({
      username: 'melbo',
      password: 'P@ssword123'
    }).expect(400);
})

test('Should notify user of invalid username or password', async () => {
  const response = await request(app)
    .post('/users/login')
    .send({
      username: 'melbo',
      password: 'P@ssword123'
    });
   expect(response.text).toBe('Incorrect username or password');
});

test('Should update valid user fields', async () => {
  await request(app)
    .patch('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send(userThree).expect(200)
  const user = await User.findById(userOneId)
  expect(user.username).toBe(userThree.username);
  expect(user.email).toBe(userThree.email);
})

test('Should reject invalid fields', async () => {
  request(app)
    .patch('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send({_id: 15})
    .expect(400)
})

test('Should delete account for authenticated user', async () => {
  await request(app)
    .delete('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200)

  const user = await User.findOne({_id: userOneId})
  expect(user).toBeNull();
})

test('Delete should reject unauthenticated user', async () => {
  await request(app)
    .delete('/users/me')
    .send({
      _id: userOneId
    })
    .expect(401)
  const user = await User.findOne({_id: userOneId})
  expect(user).not.toBeNull()
}) 

test('Should save new reading', async () =>{
  await request(app)
    .put('/auth/reading')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send(readingTwo)
    .expect(201)
    
    // const user = await User.findOne({_id: userOneId});
    // console.log(user);
    // expect(user.history).toEqual(expect.arrayContaining([readingOne, readingTwo]))
})

