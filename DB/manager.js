var Message = require('./messages.js');

exports.postMessage = function(req, res, next) {

  //uses body parser middleware to get the request.body
  var newMessage = new Message({
    userName: req.body.userName,
    message: req.body.message,
    time: req.body.time,
  })


  // Save to the messages collection
  newMessage.save(function(err){
      if(err){
        return err;
      }
      res.send(200, req.body);
    }
  );
}

exports.getMessages = function(req, res, next) {
  //Retrieve all documents in the collection
  Message.find(function(err, results){
    if(err){
      return err;
    }
    res.json(results);
  })

}
