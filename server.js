var express   = require('express');
// var mongoose = require('mongoose');
var bodyParser = require('body-parser');
// var manager = require('./app/Messages/DB/manager');
// var messageBoxesCtrl = require('./backend/controllers/').messageBoxesCtrl;
// var messagesCtrl = require('./backend/controllers/').messagesCtrl;
var app = express();

//Express Logic
var port = process.env.PORT || 8080;

app.use(bodyParser.json()); //Has to be used before routes are loaded!
app.use(express.static(__dirname));

app.listen(port);

// app.post('/messages', messageBoxesCtrl.createBox)
// app.get('/messages', manager.getMessages)

console.log("The music is playing on port " + port);


//DB Logic
// var dbURI='postgres://hygnvykngwauoi:fce9f2a4cf075c522aa4c5f8e9c27c08de4a050ff9b4364485617ddc4808c7d2@ec2-23-23-248-162.compute-1.amazonaws.com:5432/d8pt31113jj09l';
// mongoose.connect(dbURI);
//
// mongoose.connection.on('connected', function(){console.log("Mongoose. We're up")})
//
// mongoose.connection.on('error', function(err){console.log("error", err);})
//
// exports = module.exports = app;
