var Message = require('./messages.js');

exports.postMessage = function(req, res, next) {

  //uses body parser middleware to get the request.body
  var input = req.body.messages;

  var newMessage = new Message({
    id: req.body.id,
    subId: req.body.subId,
    messageArray: req.body.messageArray
  })

  Message.findOneAndUpdate(
    {$or: [{id: newMessage.id, id: newMessage.subId}, {id: newMessage.subId, id: newMessage.id}]},
    newMessage,
    {upsert: true, new: true, runValidators: true},
    function(err, doc) {
      if(err){
        console.log(err)
      } else {
        {$push: {messageArray: newMessage.messageArray[0]}}
        console.log("All good :)")
        res.send(200, req.body);
      }
    }
  );

//If the coords-id or the coords-subid of the message does not already exist, create a new collection with the
  // newMessage.save(function(err) {
  //   if(err){
  //     return err;
  //   }
  //   console.log("from mongoose","All good.")
  //   res.send(200, req.body);
  // })

  //If the coords-id or the coords-subid of the message already exists, then update and push the first object in the messages array into the collection


}

exports.getMessages = function(req, res, next) {
  //Contact the messages endpoint
    //If the coords-id or coords-subid of the message already exists, then generate all the messages in the collection


    //No need to do anything else otherwise, as the only time we want to create a collection is when we're posting and the collection doesn't already exist (postMessage function above)
}
