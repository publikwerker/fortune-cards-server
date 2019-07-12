'use strict';
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const ReadingSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true
  },
  query: {
    type: String,
  },
  cardsDealt:{
    type: Array,
    required: true,
  },
  comments: {
    type: String,
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
    trim: true,
    minlength: 1,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
    maxlength: 72
  },
  history: [ReadingSchema],
});

UserSchema.methods.serialize = function() {
  return {
    username: this.username || '',
    history: this.history || '',
    userId: this.userId || ''
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

UserSchema.statics.hashPassword = function(password){
  return bcrypt.hash(password, 10);
};

const User = mongoose.model('User', UserSchema);
const Reading = mongoose.model('Reading', ReadingSchema);

module.exports ={User, Reading};