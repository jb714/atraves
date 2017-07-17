'use strict';
module.exports = function(sequelize, DataTypes) {
  var MessageBox = sequelize.define('MessageBox', {
    geoId: DataTypes.STRING,
    subId: DataTypes.STRING,
    allowNull: false
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        MessageBox.hasMany(models.Message, {
          foreignKey: 'messageBoxId',
          as: 'messages'
        });
      },
    }
  });
  return MessageBox;
};
