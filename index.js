var express = require('express')
var app = express();

app.use('/', express.static(__dirname + '/src'));
app.get('*',function (req, res) {
        res.redirect('/index.html');
    });

const PORT=8080; 

app.listen(PORT, function() { console.log('listening on port '+ PORT + "...")});
