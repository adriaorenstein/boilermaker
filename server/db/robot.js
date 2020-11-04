const Sequelize = require("sequelize");
const db = require("./database");

module.exports = db.define("boilermaker", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  duty: {
    type: Sequelize.STRING,
  },
  image: {
    type: Sequelize.TEXT,
  },
});
