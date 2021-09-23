'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categorie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Categorie.belongsTo(models.Article, {
        foreignKey: 'articleId',
        onDelete: 'CASCADE'
      })
    }
  };
  Categorie.init({
    categorie: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categorie',
  });
  return Categorie;
};