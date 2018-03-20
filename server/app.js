var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

require('dotenv').config

var atlasURI = 'mongodb://cari-kosan:cari-kosan-mantan-hacktiv8@cluster0-shard-00-00-dwnma.mongodb.net:27017,cluster0-shard-00-01-dwnma.mongodb.net:27017,cluster0-shard-00-02-dwnma.mongodb.net:27017/admin?replicaSet=Cluster0-shard-0&ssl=true'

mongoose.connect('mongodb://localhost/cari-kosan', (err) => {
// mongoose.connect(atlasURI, (err) => {
    if (err) {console.log('NOT CONNECTED', err)}
    else{console.log('mongoose connected')}
})

var index = require('./routes/index');
var users = require('./routes/users');
var mitra = require('./routes/Mitra')
var kosan = require('./routes/Kosan')
var kamar = require('./routes/Kamar')
var penyewa = require('./routes/Penyewa')
var pengurus = require('./routes/Pengurus')
var kosTransaction = require('./routes/KosTransaction')
var kosHarian = require('./routes/KosHarian')
var barangKamar = require('./routes/BarangKamar')
var barangKosan = require('./routes/BarangKosan')
var maintenanceKamar= require('./routes/MaintenanceKamar')
var maintenanceKosan = require('./routes/MaintenaceKosan')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', index);
// app.use('/users', users);
app.use('/mitra', mitra)
app.use('/kosan', kosan)
app.use('/kamar', kamar)
app.use('/kosTransaction', kosTransaction)
app.use('/kosHarian', kosHarian)
app.use('/barangKamar', barangKamar)
app.use('/barangKosan', barangKosan)
app.use('/maintenanceKamar', maintenanceKamar)
app.use('/maintenanceKosan', maintenanceKosan)
app.use('/pengurus', pengurus)
app.use('/penyewa', penyewa)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
