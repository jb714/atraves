var Messages = require('./messages.js');

exports.postMessage = function(req, res, next) {

  //uses body parser middleware to get the request.body
  var text = {
    message: req.body.message,
    userName: req.body.userName
  }

  var messages = new Messages({
    message: text.message,
    userName: text.userName
  })

  messages.save(function(err) {
    if(err){
      return err;
    }
    res.send(200, req.body);
  })
    console.log("Message:", messages.message);
    console.log("Message:", messages.userName);

  //If the coords-id or the coords-subid of the message already exists, then save to that collection of messages

  //If the coords-id or the coords-subid of the message does not already exist, creat a new collection with the
}

exports.getMessages = function(req, res, next) {
  //Contact the messages endpoint
    //If the coords-id or coords-subid of the message already exists, then generate all the messages in the collection


    //No need to do anything else otherwise, as the only time we want to create a collection is when we're posting and the collection doesn't already exist (postMessage function above)
}
