import express from "express";
import Order from "../models/orderModel.js";

const orderRouter = express.Router();

orderRouter.get('/', async (req, res) => {
  const orders = await Order.find();
  console.log(orders)
  res.send(orders);
})

export default orderRouter;