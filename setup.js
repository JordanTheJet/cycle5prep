var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : "aan0bumyreizf1.cvobrzgqcqc6.us-east-2.rds.amazonaws.com",
  user     : "admin",
  password : "password",
  port     : 3306
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  connection.query('CREATE  TABLE `databas`.`users` (`email` VARCHAR(50), `first name` VARCHAR(50), `last name` VARCHAR(50), `password` VARCHAR(50), `role` VARCHAR(20), PRIMARY KEY (email)) ENGINE = InnoDB; ', (err,rows) => {
    if(err) throw err;

    console.log('Data received from Db:');
    console.log(rows);
  });
  console.log('Connected to database.');
});
