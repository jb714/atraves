var Message = require('./messages.js');

exports.postMessage = function(req, res, next) {

  //uses body parser middleware to get the request.body
  var newMessage = new Message({
    geoId: req.body.geoId,
    subgeoId: req.body.subgeoId,
    messageArray: req.body.messageArray
  })


  // If the coords-id or the coords-subid of the message does not already exist, create a new collection with the
  //   newMessage.save(function(err) {
  //     if(err){
  //       return err;
  //     }
  //     console.log("from mongoose","All good.")
  //     res.send(200, req.body);
  //   })

  // Search the messages collection
  Message.findOneAndUpdate(
    //Find documents that have a messageArray field with an object as first element and geoId/subId properties
    {$or: [{geo}]},

    // newMessage,  //  <--Object I would upsert with, but the _id properties conflict if such a document already exists
    {$push: {"messageArray": newMessage.messageArray[0]}},//update only the messageArray
    {upsert: true, new: true, runValidators: true},//upsert
    function(err, doc) {
      if(err){
        console.log("ayy bruh. there was an error.",err)
      } else {
        console.log("All good :)")
        //getMessages();
        res.send(200, req.body);
      }
    }
  );


}

exports.getMessages = function(req, res, next) {
  //Contact the messages endpoint
  //If the coords-id or coords-subid of the message already exists, then generate all the messages in the collection


  //No need to do anything else otherwise, as the only time we want to create a collection is when we're posting and the collection doesn't already exist (postMessage function above)
}
