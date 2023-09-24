var mysql = require("mysql2");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "tanu123",
  database: "09april",
});

//CREATE A CONNECTION
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
});

// CREATE DATABASE...................................................................................................
// con.query("CREATE DATABASE 09april", function (err, result) {
//   if (err) throw err;
//   console.log("Database created");
// });

//CREATE TABLE.....................................................................................................
// var sql =
//   "CREATE TABLE newtable (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR (255), phone VARCHAR(255))";
// con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log("TABLE CREATED");
// });

//INSERT DATA INTO TABLE..................................................................................................
// var sql = "INSERT INTO newtable (name, address, phone) VALUES ('tanu', 'SAGARPUR', '123123')";
// con.query(sql, function(err, result){
//     if (err) throw err
//     console.log("DATA INSERTED")
// })

//INSERT MULTIPLE DATA INTO TABLE...................................................................................
// var sql = "INSERT INTO newtable (name, address, phone) VALUES ?";
// var values = [
//   ["tanu2", "sagarpur2", "123654789"],
//   ["tanu3", "sagarpur3", "123654789"],
//   ["tanu4", "sagarpur4", "123654789"],
//   ["tanu5", "sagarpur5", "123654789"],
//   ["tanu6", "sagarpur6", "123654789"],
//   ["tanu7", "sagarpur7", "123654789"],
// ];
// con.query(sql, [values], function (err, result) {
//   if (err) throw err;
//   console.log("NUMBER OF RECORDS INSERTED: " + result.affectedRows);
// });

//ALTER TABLE.......................................................................................................
// var sql = "ALTER TABLE newtable ADD COLUMN email VARCHAR(255)";
// con.query(sql, function(err, result){
//     if (err) throw err
//     console.log("TABLE altered")
// })

//SELECT............................................................................................................
// con.query("SELECT * FROM newtable", function(err, result){
//     if (err) throw err;
//     console.log(result)
// })

// con.query("SELECT name, phone FROM newtable", function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

// con.query("SELECT DISTINCT phone FROM newtable", function(err, result){
//     if (err) throw err
//     console.log(result)
// })

// con.query("SELECT name,address FROM newtable WHERE address='sagarpur'", function(err, result){
//     if (err) throw err
//     console.log(result)
// })

// con.query("SELECT * FROM newtable WHERE id>='5' OR address = 'sagarpur' ", function(err, result){
//     if (err) throw err
//     console.log(result)
// })
// con.query(
//   "SELECT * FROM newtable WHERE name = 'sagarpur' AND address= 'sagarpur5' ",
//   function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   }
// );
// con.query("SELECT * FROM newtable ORDER BY address", function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });
// con.query("SELECT * FROM newtable ORDER BY name DESC", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// con.query("SELECT * FROM newtable ORDER BY name DESC,address ASC", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// con.query(
//   "SELECT * FROM newtable WHERE name LIKE 't%' AND phone LIKE '12%'",
//   function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   }
// );
// mam se poochna hai .....................................................................................
// mam se poochna hai .....................................................................................
// mam se poochna hai .....................................................................................
// mam se poochna hai .....................................................................................
// mam se poochna hai .....................................................................................
// mam se poochna hai .....................................................................................
// var sql =
//   "INSERT INTO newtable(name, address, phone) VALUES ('kumari', 'delhi', '22')";
// con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

// mam se poochna hai .....................................................................................
// mam se poochna hai .....................................................................................
// mam se poochna hai .....................................................................................
// mam se poochna hai .....................................................................................

// var sql =
//   "INSERT INTO newtable VALUES ('INT AUTO_INCREMENT PRIMARY KEY,'kumari2', 'delhi2', '222', 'hello')";
// con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });
// var sql = "SELECT * FROM newtable WHERE email IS NOT NULL ";
// con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });
// var sql = "SELECT * FROM newtable WHERE address LIKE 's%' LIMIT 3"
// con.query(sql, function(err, result){
//   if (err) throw err
//   console.log(result)
// })

// var sql ="CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR (255), favourite_product VARCHAR(255))"
// con.query(sql, function(err, result){
//   if (err) throw err
//   console.log("table created")
// })
// var sql = "INSERT INTO customers (name , favourite_product) VALUES ?";
// var values = [
//   ["jo", "154"],
//   ["joh", "155"],
//   ["john", "154"],
//   ["johnny", "153"],
//   ["johnson", "154"],
// ];
// con.query(sql, [values], function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });
// var sql =
//   "CREATE TABLE products (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR (255))";
// con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log("table created");
// });
// var sql = "INSERT INTO products (name) VALUES ?";
// var values = [
//   ["CHOCO HEAVEN"],
//   ["coffee "],
//   ["dark choco"],
//   ["butterscotch"],
//   ["blood"],
// ];
// con.query(sql, [values], function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });
// var sql= "DELETE FROM  products WHERE id"
// con.query(sql, function(err, result){
//   if (err) throw err
//   console.log("altered table")
// })
// var sql = "INSERT INTO products(id , name) VALUES ?"
// var values2 = [
//   ['153', 'DARK CHOCO'],
//   ['154', 'BUTTER SCOTCH'],
//   ['155', 'COFFEE'],
// ]
// con.query(sql,[values2], function(err, result){
//   if (err) throw err
//   console.log
// })
// var sql = "DELETE  FROM customers WHERE id > 5"
// con.query(sql,function(err, result){
//   if (err) throw err
//   console.log("DEleted")
// })
// var sql = "SELECT customers.name AS user, products.name AS favourite FROM customers JOIN products ON customers.favourite_product = products.id"
// con.query(sql, function(err, result){
//   if (err) throw err
//   console.log(result)
// })
// var sql = "CREATE TABLE employee(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), number VARCHAR(255))"
// con.query(sql, function(err, result){
//   if (err) throw err
//   console.log("table cREATED")
// })
// var sql = "CREATE TABLE employer (id VARCHAR(255), profile VARCHAR(255), country VARCHAR(255), joining VARCHAR (255))"
// con.query(sql, function(err, result){
//   if (err) throw err
//   console.log("table cREATED 2nd")
// })
// var sql = "INSERT INTO employee(name, number) VALUES?";
// var values = [
//   ["tanu", "123"],
//   ["priya", "456"],
//   ["ritu", "789"],
//   ["sanju", "741"],
//   ["vaishali", "987"],
// ];
// con.query(sql, [values], function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });
// var sql = "INSERT INTO employer(id,profile, country, joining) VALUES?";
// var values = [
//   ["1", "@tAnu","india","april"],
//   ["2", "@priya","NYC","may"],
//   ["3", "@ritu","US","june"],
//   ["4", "@sanju","UK","july"],
//   ["5", "@vaishali","Nepal","august"],
// ];
// con.query(sql, [values], function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });
// var sql = "SELECT employee.number,employer.profile, employer.country, employer.joining FROM employee JOIN employer ON  employee.id = employer.id"
// con.query(sql, function(err, result){
//   if (err) throw err
//   console.log(result)
// })
