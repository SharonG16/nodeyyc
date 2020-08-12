const express = require('express')
const router = express.Router()

//define the home page route
router.get('/', function(request, response) {
    response.send('This is my Homepage using Express Router');
  });