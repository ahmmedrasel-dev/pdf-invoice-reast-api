import express from 'express'
import User from '../models/userModel.js';
import userData from '../user.js';
const userSeeder = express.Router();

userSeeder.get('/', async (req, res) => {
  const user = await User.insertMany(userData);
  res.send(user);
})


export default userSeeder;