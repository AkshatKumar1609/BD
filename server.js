const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const colors = require('colors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

//middleware
app.use(express.json());
app.use(cors());  
app.use(morgan('dev'));

//routes
app.use('/api/v1/test', require('./routes/testRoutes'));

//listen
app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.DEV_MODE} mode on PORT ${PORT}`.bgBlue.white);
});