'use strict'
var express = require('express');
var mysql      = require('mysql');
var app = express();
var reload = require('reload');
var path = require('path');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var data;
var id;
var contain;
    
    var reg2;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/data',function(req,res) {
res.send(JSON.stringify(reg2));

});

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'function')));
app.use(express.static(path.join(__dirname, 'test')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/dash', function (req, res) {
    res.render('dash');
});

app.get('/register', function (req, res) {
    res.render('register');
});

app.post('/register',function(req,res) {
  

console.log(req.body);

var id = null;
var username = req.body.username;
var password = req.body.password;
var reg = {
  id : id,
  username : username,
  password : password
}

var connection = mysql.createConnection({

  host:'localhost',
  user: 'root',
  password: '',
  database:'db1'
});
connection.connect();

var query = connection.query('INSERT INTO tb1 set ?', reg , function (err, result){
  console.log(query.sql);
  });

connection.query('SELECT * FROM tb1', function(err, rows, fields){
  reg2 = rows;
});

connection.end();
});
app.get('/jason', function (req, res) {
    res.render('accs.json');
});

 var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'db1'
});

connection.connect();
connection.query("SELECT * FROM tb1", function(error,rows,fields){
reg2 = rows;

});

connection.end();
app.listen(3000);


//