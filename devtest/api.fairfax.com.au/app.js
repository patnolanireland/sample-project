
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , models = require('./models');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/1.0', routes.index);
app.get('/1.0/user/:id', routes.user);
app.get('/1.0/article/:id', routes.article);
app.get('/1.0/articles', routes.articles);
app.get('/1.0/articles/:callback*', routes.articles);

app.listen(4000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
