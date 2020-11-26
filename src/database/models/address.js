"use strict";
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define(
    "Address",
    {
      userId: DataTypes.INTEGER,
      address: DataTypes.TEXT,
    },
    {}
  );
  Address.associate = function (models) {
    Address.belongsTo(models.User);
  };
  return Address;
};
