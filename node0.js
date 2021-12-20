var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect(function(err){
if (err) throw err;
console.log("Connected to Database !");
var sql= "CREATE TABLE BookDetails (bname VARCHAR(255), author VARCHAR(255))";
con.query(sql, function(err,result){
   if (err) throw err;
   console.log("Table created!");
});


});

/* 
Create a DB to store book details, retrieve records with 2 different query using Mysql with Node JS */