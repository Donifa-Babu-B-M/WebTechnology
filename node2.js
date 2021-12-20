var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("RETRIEVAL OF DATA !");
  con.query("SELECT * FROM BookDetails", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});