const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const userRoutes = require('./routes/users');

mongoose.Promise = globalThis.Promise;
mongoose.connect('mongodb://localhost/rest-api', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', function(){
    console.log('Opened');
}).then(db => console.log('db is connected'))
    .catch(err => console.log(err));
    
//settings
app.set('port', process.env.PORT || 3000);

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

//routes
app.use('/users', userRoutes);

//start the server
app.listen(app.get('port'),() =>{
    console.log('server on port', app.get('port'));
})