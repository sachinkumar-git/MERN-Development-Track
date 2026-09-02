const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");


app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'Sachin@123'
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),      // Updated to string.uuid()
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// Home route 
app.get("/", (req, res) => {
  let q = `SELECT count(*) FROM user`;
  
  connection.query(q, (err, result) => {
  
    if (err) {
      console.log(err);
      return res.send("some error in DB"); 
    }
    
    let count = result[0]["count(*)"];
    console.log("Total users:", count);
    res.render("home.ejs", { count: count });
  });
});

// Show Route
app.get("/user", (req, res) => {
  let q = `SELECT * FROM user`;

  connection.query(q, (err, users) => {
    if (err) {
      console.log(err);
      return res.send("some error in DB");
    }
    
    res.render("showusers.ejs", { users });
  });
});

// Edit Route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user where id ='${id}'`;
  

  
  connection.query(q, (err, result) => {
    if (err) {
      console.log(err);
      return res.send("some error in DB");
    }
    
    let user = result[0];
    res.render("edit.ejs", { user });
  });
});



//UPDATE (DB) Route
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUsername } = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (formPass != user.password) {
        res.send("WRONG password");
      } else {
        let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});

app.listen("8080", () => {
    console.log("server is listening to port 8080");
});