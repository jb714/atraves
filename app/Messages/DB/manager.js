var Messages = require('./messages.js');

exports.postMessage = function(req, res, next) {

  //uses body parser middleware to get the request.body
  var input = req.body.messages;

  var messages = new Messages({
    id: req.body.id,
    subId: req.body.subId,
    messages: req.body.messages
  })

//If the coords-id or the coords-subid of the message does not already exist, create a new collection with the
  messages.save(function(err) {
    if(err){
      return err;
    }
    res.send(200, req.body);
  })

  //If the coords-id or the coords-subid of the message already exists, then update and push the first object in the messages array into the collection


}

exports.getMessages = function(req, res, next) {
  //Contact the messages endpoint
    //If the coords-id or coords-subid of the message already exists, then generate all the messages in the collection


    //No need to do anything else otherwise, as the only time we want to create a collection is when we're posting and the collection doesn't already exist (postMessage function above)
}
