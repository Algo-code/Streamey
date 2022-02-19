var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const InitiateMongoServer = require('./config/db');

InitiateMongoServer();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'files')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); //Allows what domains can communicate with the server
  res.setHeader('Acess-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE'); //allows what methods the domain can use with the server
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');//allow clients to set content-type and send headers with authorization.
  next();
})

//app.use('/', indexRouter);
app.use('/', usersRouter, indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500).json({
    error: err.message
  });
});

module.exports = app;
