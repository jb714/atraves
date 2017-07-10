var express   = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var manager = require('./app/Messages/DB/manager');
var app = express();

//Express Logic
var port = process.env.PORT || 8080;

app.use(bodyParser.json()); //Has to be used before routes are loaded!
app.use(express.static(__dirname));

app.listen(port);

app.post('/messages', manager.postMessage)
app.get('/messages', manager.getMessages)

console.log("The music is playing on port " + port);


//Mongoose Logic
var dbURI='mongodb://heroku_llgq3k60:cq0usn208jvs34tvvfdl0jnfmn@ds151702.mlab.com:51702/heroku_llgq3k60'
mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){console.log("Mongoose. We're up")})

mongoose.connection.on('error', function(err){console.log("error", err);})

exports = module.exports = app;
