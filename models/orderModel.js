
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  desctiption: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true
  }
},
  {
    timestamps: true
  })

const Order = mongoose.model('Orders', orderSchema);

export default Order;