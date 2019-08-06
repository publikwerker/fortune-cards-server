'use strict';
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const validator = require('validator');

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
}, {
  timestamps: true
});

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
  email: {
    type: String,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid.')
      }
    }
  }
}, {
  timestamps: true
});

UserSchema.methods.serialize = function() {
  return {
    username: this.username || '',
    history: this.history || '',
    userId: this._id || ''
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
  console.log(`hashing!`)
  return bcrypt.hash(password, 10);
};

const User = mongoose.model('User', UserSchema);
const Reading = mongoose.model('Reading', ReadingSchema);

module.exports ={User, Reading};