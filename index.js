import express from 'express';
const app = express();
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import seedRouter from './routes/seedRoutes.js';
import orderRouter from './routes/orderRouter.js';
import userSeeder from './routes/userSeeder.js';
const port = process.env.PORT || 5000

dotenv.config();

// Connect Mongoose.
mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log('Mongodb Connected');
}).catch((error) => {
  console.log(error);
})

// Seeding Order Data to Databse.
app.use('/api/seed', seedRouter);

// Seeding User Data to Databse.
app.use('/api/user-seed', userSeeder);

// Orders Rest Api .
app.use('/api/orders', orderRouter);

// Get Individual Order.
// app.use('api/order', orderRouter);

app.get('/', (req, res) => {
  res.send('Surver is running')
})


app.listen(port, () => {
  console.log(`Server is runnnig from Port: ${port}`)
})