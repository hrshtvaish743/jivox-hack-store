var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

var routes = require('./routes/index');
var users = require('./routes/users');

var config = require('./config');
var util = require('./lib/util');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/admin', require('./routes/admin'));

// don't use this api
app.use('/ratings', require('./routes/ratings'));
app.use('/search', require('./routes/search'));

app.use('/consumer',(req, res, next) => {
    util.jwtMiddleware(req, res, next, false);
});

app.use('/vendor', (req, res, next) => {
    util.jwtMiddleware(req, res, next, true);
});

app.use('/category', require('./routes/consumer/category'));
app.use('/vendor/category', require('./routes/vendor/category'));
app.use('/consumer/ratings', require('./routes/consumer/ratings'));
app.use('/consumer/wishlist', require('./routes/wishlist'));
app.use('/consumer/address', require('./routes/consumer/address'));

app.use('/products', require('./routes/consumer/product'));
app.use('/vendor/products', require('./routes/vendor/product'));

app.use('/consumer/orders', require('./routes/consumer/order'));
app.use('/vendor/order-status', require('./routes/vendor/orderStatus'));
app.use('/vendor/orders', require('./routes/vendor/order'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
