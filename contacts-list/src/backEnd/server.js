
const path = require('path')
const express = require('express');
const bodyParser = require('body-parser')
const mysql = require('mysql2');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'paradox',
  database : 'myfirstdatabase'
});
connection.connect();
const server = express()

server.listen(5000)
server.use(express.static(__dirname));
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json())

server.get("/", (req, res) => {
    res.send("Back-end Server Online")
})

server.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "form.html"))
})

server.post("/register", (req, res) => {
    connection.query(`INSERT INTO users(username, hashPassword, firstName, lastName, picture) VALUES('${req.body.username}', '${req.body.hashPassword}', '${req.body.firstName}', '${req.body.lastName}', '${req.body.picture}')`, (error, results) => {
        if (error) throw error
        console.log(results)
})
})


// connection.query('SELECT * FROM users', (error, results) => {
//     if (error) console.log(error); 
//     console.log(results); 
// })


