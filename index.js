import express from 'express';
const app = express();
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import seedRouter from './routes/seedRoutes.js';
import orderRouter from './routes/orderRouter.js';
const port = process.env.PORT || 5000

dotenv.config();

mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log('Mongodb Connected');
}).catch((error) => {
  console.log(error);
})

app.use('/api/seed', seedRouter);
app.use('/api/orders', orderRouter);

app.get('/', (req, res) => {
  res.send('Surver is running')
})



app.listen(port, () => {
  console.log(`Server is runnnig from Port: ${port}`)
})