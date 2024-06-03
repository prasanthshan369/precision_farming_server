const mysql=require('mysql2')
var db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    port:process.env.DB_PORT,
    database: process.env.DB_NAME,
  });
  db.connect(function (err) {
    if (err) {
        console.error('Error connecting to MySQL database:', error);
      } else {
        console.log(`Connected to DB_HOST:${process.env.DB_HOST} MySQL database! PORT:${process.env.DB_PORT}`);
      }
    })
module.exports=db