var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

var routes = require('./routes/index');
var users = require('./routes/users');

const orm = require("orm");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

const sessionStore = new MongoDBStore({
    uri: "mongodb://localhost/user_system_session",
    collection: "session"
});

//config orm
app.use(orm.express("mysql://root:@localhost/us", {
    define: function (db, models, next) {
        models.user = db.define("user", {
            id: Number,
            login: String,
            password: String,
            gender: Number
        });
        next();
    }
}));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
    secret: "123456",
    resave: false,
    saveUninitialized: true,
    store: sessionStore
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/api', require("./routes/api"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
