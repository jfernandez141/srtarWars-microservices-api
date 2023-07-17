const express = require('express');
const morgan = require('morgan');
const app = express();


app.use(express.json());
app.use(morgan('dev'));


app.use(require('./routers'))


app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        error: true,
        message: err.message
    })
})

module.exports = app;