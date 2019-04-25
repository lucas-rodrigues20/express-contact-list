'use strict';

module.exports = (sequelize, DataTypes) => {
  var Contact = sequelize.define('Contact', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
    }
  });

  return Contact;
}