'use strict'

const express = require('express');
const app = express();



const notFoundHandler = require('./error-handlers/404');
const errHandler = require('./error-handlers/500');
const validatorMiddleware = require('./middleware/validator');
const loggerMiddleware = require('./middleware/logger');



app.use(express.json());
app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.status(200).send(`Hello this is home root 😁`)
});

app.get('/person', validatorMiddleware, (req, res) => {
    res.send(`Hello >>>>> ✋, ${req.validator} 😎`)
});

app.get('/bad', (req, res, next) => {
    next('error from bad end point');
});

app.use('*', notFoundHandler);
app.use(errHandler);

module.exports = {
    server: app,
    start: PORT => {
        app.listen(PORT, () => {
            console.log(`Server is up on port ${PORT}`)
        })
    }
}