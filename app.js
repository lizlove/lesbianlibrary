var express = require('express'),
    compression = require('compression')
;

var app = express();

var oneDay = 86400000;

app.use(compression());
app.use(express.static(__dirname + '/public', { maxAge: oneDay }));

app.listen(process.env.PORT || 3000);
