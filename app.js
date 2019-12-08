var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const config = require('./config')
config.init()

var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');
var productRouter = require('./routes/products');
var courseRouter = require('./routes/courses');

var app = express();

const cors = require('cors')
app.use(cors())


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', productRouter);
app.use('/api', userRouter);
app.use('/api', courseRouter);

module.exports = app;
