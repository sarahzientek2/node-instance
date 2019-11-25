var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const config = require('./config')
config.init()
var indexRouter = require('./routes/index');
const userRouter = require('./routes/users');
const productRouter = require('./routes/products');
const courseRouter = require('./routes/courses');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/courses', courseRouter);

module.exports = app;
