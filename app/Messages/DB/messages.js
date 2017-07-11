var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
  id: String,
  subId: String,
  messages: [{
    userName: String,
    text: String,
    time: String
  }]
})

var Messages = mongoose.model('Messages', messageSchema);
module.exports = Messages;
