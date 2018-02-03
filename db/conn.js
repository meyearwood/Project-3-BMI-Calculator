// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
const Sequelize = require('sequelize');

// Vars
let dbName, user, pw, host;

const dbConfig = {
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000,
    },
    define: {
        // don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false,
        // disable the modification of tablenames; By default, sequelize will automatically
        // transform all passed model names (first parameter of define) into plural.
        freezeTableName: true,
    },
};

// Get config based on Env
const setupDBParams = () => {
    const isProd = process.env.NODE_ENV === 'production';

    if (!isProd) {
        // Dev Params Here
        dbName = 'bmi';
        user = 'root';
        pw = 'xxxx';
        dbConfig.host = 'localhost';
    } else {
        //Prod Params Here
        dbName = 'iqt49d9szpkzzip3';
        user = 'dvw45g6r1gh87q99';
        pw = 'gogj5osgq5hamrpf';
        dbConfig.host = 'fugfonv8odxxolj8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com';

    }
};

setupDBParams();

// Creates mySQL connection using Sequelize
const conn = new Sequelize(dbName, user, pw, dbConfig);


// Exports the connection for other files to use
module.exports = conn;
