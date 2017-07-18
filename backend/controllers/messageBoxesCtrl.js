var MessageBox = require('../models').MessageBox;

module.exports = {
  createBox(req, res) {
    return MessageBox
    .create({
      geoId: req.body.geoId,
      subId: req.body.subId
    })
    .then(messageBox => res.status(202).send(messageBox))
    .catch(error => res.status(400).send(error));
  }
};
