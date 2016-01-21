var http = require('http');

var server = http.createServer(function(req, res) {
    var reqTime = decodeURIComponent(req.url.slice(1));

    // If requested time is number convert it
    if (Number(reqTime) == reqTime && Number(reqTime) % 1 === 0){
        reqTime = Number(reqTime);
    }

    var date = new Date(reqTime);

    // Prepair response
    res.writeHead(200, {"Content-Type": "application/json"});

    if (isNaN(date)) {
        res.end(JSON.stringify({'unix':null, 'natural': null}));
    } else {
        res.end(JSON.stringify({'unix': date.getTime(), 'natural': date.toDateString()}));
    }
});

server.listen(3000);
