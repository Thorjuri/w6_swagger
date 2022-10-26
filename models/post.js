'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init({
    likes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },  
    postId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    postContent: DataTypes.STRING,
    postName: DataTypes.STRING,
    // postDate: {
    //   type: DataTypes.DATE,
    //   defaultValue: DataTypes.DATE
    // },
  password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};