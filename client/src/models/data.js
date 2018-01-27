var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../services/connection.js");

// Creates a "BMI" model that matches up with DB
var BMI = sequelize.define("bmi", {
  // bmiIndex (a string)
  bmiIndex: Sequelize.STRING,
  // Results (a string)
  results: Sequelize.STRING,
  // risks (a string)
  risks: Sequelize.STRING,
  
  }, {
  timestamps: false
});


// Syncs with DB
BMI.sync();


module.exports = BMI;



