var mysql = require('mysql');
var fs = require('fs')
var connection = mysql.createConnection({
  host     : "aan0bumyreizf1.cvobrzgqcqc6.us-east-2.rds.amazonaws.com",
  user     : "admin",
  password : "password",
  port     : 3306
});
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
//create new user
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

// createNewUser(user)
//query all users by email
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
// queryAllByEmail(user2.email);
// 😊🤣🤣🤣🤣❤❤❤🤣🤣🤣🤣😊😂😂😂😊😊😊😁💕😍😒😒😒😒😒

function getUserID(){

  connection.connect(function(err, database) {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }
    console.log(database)
    // connection.query(fs.readFileSync('./sql/queryByEmail.sql').toString(),[Email], (err,rows) => {
    //   if(err) throw err;
    
    //   console.log('Data received from Db:');
    //   console.log(rows);
    // });
    console.log('Connected to database.');
  });
  
}
getUserID()
// 