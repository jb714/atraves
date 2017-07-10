var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
  // id: String,
  // subId: String,
  message: String,
  userName: String
})

var Messages = mongoose.model('Messages', messageSchema);
module.exports = Messages;
