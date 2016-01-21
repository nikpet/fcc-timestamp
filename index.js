var http = require('http');

var server = http.createServer(function(req, res) {
    if (req.url === '/') {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write("FCC timestamp microservice\n");
        res.write("\n");
        res.write("Example usage:\n");
        res.write("https://still-cliffs-32544.herokuapp.com/December%2015,%202015\n");
        res.end("https://still-cliffs-32544.herokuapp.com/1450137600");
    }
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

server.listen(process.env.PORT || 5000);
