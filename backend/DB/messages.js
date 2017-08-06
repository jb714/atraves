var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
  userName: String,
  message: String,
  time: String

})

var Message = mongoose.model('Message', messageSchema);
module.exports = Message;