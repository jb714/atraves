'use strict';
module.exports = function(sequelize, DataTypes) {
  var Message = sequelize.define('Messages', {
    userName: {
      type: DataTypes.STRING
      allowNull: false
    },
    message: {
      type: DataTypes.STRING
      allowNull: false
    },
    timeStamp: {
      type: DataTypes.STRING
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Message.belongsTo(models.MessageBox, {
          foreignKey: 'messageBoxId'
        })
      }
    }
  });
  return Message;
};
