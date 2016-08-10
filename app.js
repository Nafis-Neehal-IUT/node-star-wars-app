//require express

var express = require ('express');
var app = express();

//set view engine
app.set('view engine','ejs');

var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
//Routes

//home route
app.get('/', routes.home);
//single movie
app.get('/star_wars_episode/:episode_number?', routes.movie_single);
//not found
app.get('*', routes.not_found);

//port listen and server running
app.listen(process.env.PORT || 3000);