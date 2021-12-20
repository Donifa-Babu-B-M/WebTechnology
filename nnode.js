var mysql=require('mysql');

var con =mysql.createConnection({

    host:"localhost",

    user:"root",

    password:"",

    database:"db" 

});

con.connect(function(err){

    if (err) throw err;

    console.log("Connected");

    var sql="INSERT INTO BOOKS (bookno,name,author,available) VALUES ?"

    var records=[[1,'Politics of Opportunism','R P N Singh',2],

    [2,'Bridgital Nation','Shri N Chandrasekaran',2],

    [3,'My Journey','Dr. A.P.J. Abdul Kalam',2],

    [4,'Darkness to light','Lamar Odom',2]

    ]

    con.query(sql,[records],function(err,result) {

        if (err) throw err;

        console.log("Records Inserted");

    }) ;

con.query("SELECT * FROM BOOKS",function(err,result){

    if(err) throw err;

    console.log(result);

});

con.query("UPDATE BOOKS SET available=1 WHERE bookno=1",function(err,result){

    if(err) throw err;

    console.log(result);

});

con.query("SELECT * FROM BOOKS",function(err,result){

    if(err) throw err;

    console.log(result);


});
});