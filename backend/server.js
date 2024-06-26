const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const connectDB  = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');

connectDB();


const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/posts', require('./routes/postRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(port, () => {
  console.log('Server is running...');
});


