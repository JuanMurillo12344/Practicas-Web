import mongoose from 'mongoose';

const uri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

mongoose.connect(uri, {
  user: process.env.DB_USER,
  pass: process.env.DB_PASSWORD,
})
.then(() => console.log('Mongoose DB connected'))
.catch(err => console.error('Mongoose DB connection error:', err));