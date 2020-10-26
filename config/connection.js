var mysql = require("mysql");
let mysql = require("mysql");

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL)
  
// } else {
var connection = mysql.createConnection({
  host: "f2fbe0zvg9j8p9ng.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "qm6y0pmz43xne7ma",

  // Your password
  password: "koxdydwdo6e18cxt",
  database: "e7mqg8wp7r0pqw84"
});

connection.connect(function(err){
    if(err) throw err;})

  module.exports=connection