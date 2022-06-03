import express from 'express'
const seedRouter = express.Router();
import data from '../data.js';
import Order from '../models/orderModel.js';


seedRouter.get('/', async (req, res) => {
  const order = await Order.insertMany(data);
  res.send(order);
})


export default seedRouter;