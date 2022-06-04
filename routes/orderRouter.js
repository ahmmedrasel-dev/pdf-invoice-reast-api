import express from "express";
import Order from "../models/orderModel.js";

const orderRouter = express.Router();


// Get All Orders API:
orderRouter.get('/', async (req, res) => {
  const orders = await Order.find();
  console.log(orders)
  res.send(orders);
})

orderRouter.get('/:id', async (req, res) => {
  let order = await Order.findOne({ orderId: req.params.id })
  if (order) {
    res.send(order);
  } else {
    res.status(404).send({ message: 'Order is not found!' })
  }
})


export default orderRouter;