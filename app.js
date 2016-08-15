/**
 * Created by WangCan on 16/8/12.
 */
var express = require('express');

var zlib = require('zlib');
var iconv = require('iconv-lite');
var sts = require('string-to-stream');



var app = express();

app.get('/', function (req, res) {
    res.json(require('./test.json'))
});

app.get('/file', function (req, res) {

    var tempString = iconv.encode(JSON.stringify(require('./test.json')), 'gbk');

    var gzip = zlib.createGzip();

    sts(tempString).pipe(gzip).pipe(res);

    res.flush();
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});