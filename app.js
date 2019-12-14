const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//middlewares
app.use(bodyParser.json());

//import routes
const usersRoute = require('./routes/users');

app.use('/users', usersRoute);

//routes
app.get('/', (req, res) => {
    res.send('Express');
});

//connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => 
console.log('connected to db')
);


app.listen(3000);