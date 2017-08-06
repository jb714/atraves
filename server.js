var express   = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var manager = require('./backend/DB/manager');
var dotenv = require('dotenv').config({ silent: process.env.NODE_ENV === 'production'});
var app = express();

//Express Logic
var port = process.env.PORT || 8080;

app.use(bodyParser.json()); //Has to be used before routes are loaded!
app.use(express.static(__dirname));

app.listen(port);

app.post('/messages', manager.postMessage)
app.get('/messages', manager.getMessages)

console.log("The music is playing on port " + port);


//DB Logic
console.log("DB URI",process.env.DB_URI);
mongoose.connect(process.env.DB_URI);

mongoose.connection.on('connected', function(){console.log("Mongoose. We're up")})

mongoose.connection.on('error', function(err){console.log("error", err);})

exports = module.exports = app;
