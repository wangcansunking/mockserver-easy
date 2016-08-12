/**
 * Created by WangCan on 16/8/12.
 */
var express = require('express');

var json = require('./test.json');

var app = express();

app.get('/', function (req, res) {
    res.json(json)
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});