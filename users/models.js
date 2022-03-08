'use strict';
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const dateFormat = require('../utils/dateFormat');

mongoose.Promise = global.Promise;

const ReadingSchema = mongoose.Schema({
  readingId: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true
  },
  query: {
    type: String,
    maxlength: 255
  },
  cardsDealt:{
    type: Array,
    required: true,
  },
  notes: {
    type: String,
    maxlength: 1023
  }, 
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp)
  },
}, {
  timestamps: true,
  id: false,
});

// Transform output during `res.json(data)`, `console.log(data)` etc.
ReadingSchema.set('toJSON', {
  virtuals: true,
  getters: true,
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
    maxlength: 31
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
    maxlength: 72
  },
  history: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Reading',
    },
  ],
  email: {
    type: String,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid.')
      }
    }
  },
  tokens: [
    {
      token: {
        type: String,
        required: true
      }
    }
  ],
  avatar: {
    type: Buffer
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    getters: true,
  }
});

UserSchema.virtual('readingCount').get(function() {
  return this.history.length;
});

UserSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({_id: user._id.toString()}, JWT_SECRET, { expiresIn: '1 day'});
  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};


UserSchema.methods.serialize = function() {
  return {
    username: this.username || '',
    history: this.history || '',
    userId: this._id || '',
    email: this.email || '',
    avatar: this.avatar || '',
    tokens: this.tokens || []
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

// statics are accessible on the Models
UserSchema.statics.findByCredentials = async (username, password) => {
  const user = await User.findOne({username});
  if(!user){
    throw new Error('Unable to login');
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Unable to login');
  }
  return user;
}
UserSchema.statics.hashPassword = function(password){
  return bcrypt.hash(password, 10);
};

// Hash plain text password before saving
UserSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model('User', UserSchema);
const Reading = mongoose.model('Reading', ReadingSchema);

module.exports ={User, Reading};