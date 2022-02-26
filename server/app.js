//  Add Middlewares
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const morgan = require('morgan');
const commentsRouter = require('./routes/commentRouter');

// apply middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
if (process.env.NODE_ENV === 'developement') {
  app.use(morgan('dev'));
}

// Show static files
// app.use(express.static(`${__dirname}/public/`));

// custom middleware
app.use((req, res, next) => {
  req.reqTime = new Date().toISOString();
  next();
});

// Root

app.get('/', (req, res) => {
  res.status(200).send('Hello we are Alive from app');
});

app.use('/api/v1/', commentsRouter);

module.exports = app;
