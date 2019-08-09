const jwt = require('jsonwebtoken');
const { User } = require('../users/models');
const JWT_SECRET = process.env.JWT_SECRET;

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')
      .replace('Bearer ', '');
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log(decoded);
    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });
    if (!user) {
      throw new Error({ message: 'User not found' });
    }
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({
      error: 'Please Authenticate.'
    });
  };
};

module.exports = auth;