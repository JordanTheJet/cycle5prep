var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : "aan0bumyreizf1.cvobrzgqcqc6.us-east-2.rds.amazonaws.com",
  user     : "admin",
  password : "password",
  port     : 3306
});

function createNewUser(user){
connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  connection.query(fs.readFileSync('./sql/createUser.sql').toString(), [user.email, user.firstName, user.lastName, user.password, user.role], (err,rows) => {
    if(err) throw err;
  
    console.log('Data received from Db:');
    console.log(rows);
  });
  console.log('Connected to database.');
});

}

var user2 ={
  email: 'pantyman@icstars.org',
  firstName: 'patton',
  lastName: 'nguyen',
  password: 'jordan',
  role: 'student'
}
// createNewUser(user2);

var user ={
  email: 'jtian@icstars.org',
  firstName: 'jordan',
  lastName: 'tian',
  password: 'jordan',
  role: 'student'
}
var fs = require('fs')

function queryAllByEmail(Email){

  connection.connect(function(err) {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }
    connection.query(fs.readFileSync('./sql/queryByEmail.sql').toString(),[Email], (err,rows) => {
      if(err) throw err;
    
      console.log('Data received from Db:');
      console.log(rows);
    });
    console.log('Connected to database.');
  });
  
}
queryAllByEmail(user2.email);