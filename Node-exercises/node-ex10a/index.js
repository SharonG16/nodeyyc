
// require the express module
const express = require('express');


// then create a express server
const app = express()
const port = 3000

app.get('/', function(request, response) {
    response.send('Hello Node.js World!');
  });
  
  app.post('/', function(request, response) {
    response.send('Hello Wide World!');
  });

app.listen(port)




