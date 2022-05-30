import { Sequelize }  from 'sequelize';
import dotenv from 'dotenv';
// import mysql from 'mysql';

dotenv.config();

const database = new Sequelize(process.env.DB_NAME, process.env.DB_USER, '', {

        "host" : process.env.DB_HOST,
        "port" : process.env.DB_PORT,
        "dialect" : 'mysql'

});

//connect for cerate database

// const database = mysql.createConnection({
//         host : process.env.DB_HOST || "localhost",
//         user : process.env.DB_USER || "root",
//         password : "",
//         port : 3308,
//         database : process.env.DB_NAME || "apotek"
// });


// //create database
// database.connect(function(err){


//     database.query("CREATE DATABASE apotek", function(err, result){

       
//         if(!err){

//                 console.log("Database success created");

//         }else{

//                 console.log(`Database failed created ${err}`);
//         }

//     });


// });


export default database;