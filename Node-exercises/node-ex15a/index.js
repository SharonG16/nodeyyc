const express = require('express');
const path = require('path');

const app = express()
const port = 3000

const requestTime = (req, res, next) => {
    const message = `Request: ${req.hostname} ${Date.now()}`;
    console.log(message);

    next();
};

app.use(requestTime)

app.get('/', (req, res) => {
    res.json({
        "status": 200,
        "message": "Este request/response est, OK"
    })
})

app.listen(port)