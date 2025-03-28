const sequelize = require("sequelize");
const db = require("../config/database");

const Commande = db.define("commande", {
  id: { type: sequelize.INTEGER, primaryKey: true, autoIncrements: true },
  prix: { type: sequelize.FLOAT, allowNull: false },
  date: { type: sequelize.DATE, allowNull: false },
  status: { type: sequelize.STRING, allowNull: false },
});

module.exports = Commande;
