const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'Sachin@123'
});

// let q = "SHOW TABLES";
//Inserting New Data
let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// let user = ["123", "123_newuser", "abc@gmail.com", "abc"];
let users = [ ["123b", "123_newuserb", "abc@gmail.comb", "abcb"], ["123c", "123_newuserc", "abc@gmail.comc", "abcc"] ]




try {
      connection.query(q, [users], (err, results) =>  {
  if (err) throw err;
      console.log(results);
      console.log(results.length);
      // console.log(results[0]);
      // console.log(results[1]);



});
} catch (err) {
  console.log(err);
}

connection.end();

let getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

// console.log(getRandomUser());