var express   = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var manager = require('./backend/DB/manager');
// var config = require('./config.js')
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
var dbURI = "mongodb://heroku_g1x7n20p:ph7pbg081n5dg99ffog8nqnjvi@ds023455.mlab.com:23455/heroku_g1x7n20p";
mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){console.log("Mongoose. We're up")})

mongoose.connection.on('error', function(err){console.log("error", err);})

exports = module.exports = app;
