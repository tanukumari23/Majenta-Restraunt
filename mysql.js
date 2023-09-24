var mysql = require("mysql2");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "tanu123",
  database: "mydb",
});
con.connect(function (err) {
  if (err) throw err;
  var sql = "ALTER TABLE employees2 ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table altered");
  });
  // var name = "who";
  // var adr = "Highway 354";
  // var sql = "SELECT * FROM employees2 WHERE  name = 'whom' AND (address ='highway 56' OR address = 'highway 963')";
  // con.query(sql, [name,adr], function (err, result) {
  //     if (err) throw err;
  //     console.log(result);
  //   });
  // var name = "who";
  // var adr = "Highway 354";
  // var sql = "SELECT * FROM employees2 WHERE name =? AND address =?";
  // con.query(sql, [name,adr], function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  // });
  // var adr = "Highway 4566";
  // var sql = "SELECT * FROM employees2 WHERE address =" + mysql.escape(adr);
  // con.query(function (err) {
  //   if (err) throw err;
  //   console.log(result);
  // });
  // con.query("SELECT * FROM employees2 WHERE address  LIKE '71%'", function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  // });
  // con.query("SELECT name, age FROM employees2 ",function(err,result,fields){
  //   if (err) throw err;
  //   console.log(fields);
  // })
  // con.query("SELECT * FROM employees2", function (err, result, fields) {
  //   if (err) throw err;
  //   console.log(result);
  // });
  // con.query("CREATE DATABASE mydb", function (err, result) {
  //   if (err) throw err;
  //   console.log("Database created");
  // });
  // var sql =
  //   "CREATE TABLE customers (name VARCHAR (255), address VARCHAR (255))";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table Created");
  // });
  // var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("1 record inserted");
  // });
  // var sql = "CREATE TABLE employees2( name VARCHAR (255), age VARCHAR(255), qualification VARCHAR(32), address VARCHAR(255), phone VARCHAR(255))"
  // con.query(sql, function(err, result){
  //   if (err) throw err
  //   console.log("NEW TABLE CREATED")
  // });
  
  // // var sql =
  //   "INSERT INTO employees(name,age,qualification,adress,phone) VALUES('Ram', '25', 'BTECH', 'delhi', '123654789')";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("New Record Inserted");
  // });
  // var sql =
  //   "INSERT INTO employees2(name,age,qualification,address,phone) VALUES ?";
  // var values = [
  //   ['John', '32', 'btech', 'Highway 85', '123654789'],
  //   ['hello', '28', 'bcom', 'Highway 96', '123654789'],
  //   ['who', '29', 'ba', 'Highway 354', '123654789'],
  //   ['how', '50', 'bba', 'Highway 456', '123654789'],
  //   ['whom', '36', 'bca', 'Highway 852', '123654789'],
  //   ['when', '87', 'mca', 'Highway 789', '123654789'],
  //   ['not', '97', 'btech', 'Highway 963', '123654789']

  // ];
  // con.query(sql, [values], function (err, result) {
  //   if (err) throw err;
  //   console.log("New Record Inserted");
  // });
});
