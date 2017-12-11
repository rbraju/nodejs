const fs = require('fs');
const http = require('http');
const port = 8787;

// Start http-server
const server = http.createServer((request,response) => {
    var path = request.url;
    switch(path) {
        case '/hello':
            response.end('<h3>Hello Node.js server !</h3>');
            break;
        case '/chalk':
            fs.readFile('chalk.js', 'utf8', function(err, contents){
                response.end(contents);
            });
            break;
        default:
            response.end('Nothing here');
    }
});

server.listen(port, (err) => {
    console.log(`Server listening on port ${port}`);
});
