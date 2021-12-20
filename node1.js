var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect(function(err){
    if (err) throw err;
    console.log("INSERTION INTO TABLE !");
    var sql1="INSERT INTO BookDetails (bname, author) VALUES ('Python for Beginners' , 'Dr.Bala Soundar'),('ANSI C' , 'Dr.Seetha')";

    con.query(sql1, function(err,result){
        if (err) throw err;
        console.log("2 Books entered");
});


});

/* 
Create a DB to store book details, retrieve records with 2 different query using Mysql with Node JS */