const http = require('http'); // the http package 

const hostname = '127.0.0.1'; //  local web server, the main post office where mails go
const port = 3030; //this is our address

const server = http.createServer((req, res) => { // we are asking this http server to handle a request and give usa response
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\nMy name is Blake.'); // res.end is like a php echo statement
});

server.listen(port, hostname, () => { // listenig for mail on our port
  console.log(`Server running at http://${hostname}:${port}/`);
});

// if you type in localhost:3030 the echoed message will apear in the browser