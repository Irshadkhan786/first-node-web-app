/* const mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'moud_missioncoordination'
  });

connection.connect();
 



var getUser = (userId) =>{
    //return 'select * from coordination_user where user_id='+userId;
    connection.query('select * from coordination_user where user_id='+userId, function (error, results, fields) {
        if (error) throw error;
         console.log(results);
      });
}
module.exports = {
    getUser
}
connection.end(); */