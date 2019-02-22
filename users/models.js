'use strict';
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const ReadingSchema = mongoose.Schema({
  comments: {type: String,},
  query: {type: String,},
  spread: [{
    id: {type: String,},
    name: {type: String,},
    desc: {type: String,}, 
    image: {type: String,},
    facing: {type: Number,},
  }],
  userId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true
  },
});

//Add `createdAt` and `updatedAt` fields
ReadingSchema.set('timestamps', true);

// Transform output during `res.json(data)`, `console.log(data)` etc.
ReadingSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, result) => {
    delete result._id;
    delete result.__v;
  }
});

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  history: [ReadingSchema],
});

UserSchema.methods.serialize = function() {
  return {
    username: this.username || '',
    history: this.history || ''
  };
};

UserSchema.methods.xtractHistory = function () {
  return {
    history: this.history || ''
  };
};

UserSchema.methods.validatePassword = function(password) {
  return bcrypt.compare(password, this.password);
};

UserSchema.methods.getHistory = function() {
  return this.history;
};

UserSchema.statics.hashPassword = function(password){
  return bcrypt.hash(password, 10);
};

const User = mongoose.model('User', UserSchema);
const Reading = mongoose.model('Reading', ReadingSchema);

module.exports ={User, Reading};