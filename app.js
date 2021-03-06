const sql = require("mssql");
var express = require("express");
var app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.set('port', process.env.PORT || 8080);

app.get('/', function (req, res) {
    res.json({ test: "test" });
});

app.listen(app.get('port'));
