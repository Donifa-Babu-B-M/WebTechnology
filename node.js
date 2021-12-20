

  var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",

});

con.connect(function(err){
    if (err) throw err;
     
    console.log("Connected to Database !");

    con.query("CREATE DATABASE mydb", function (err, result) {
        if (err) throw err;
        
    console.log("Database created");
  });


});

/* 
Create a DB to store book details, retrieve records with 2 different query using Mysql with Node JS */