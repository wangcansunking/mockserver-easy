/**
 * Created by WangCan on 16/8/12.
 */
var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.json(require('./test.json'))
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});