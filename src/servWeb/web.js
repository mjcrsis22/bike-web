require('dotenv').config();

const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

// import routes
const apiRoute = require('./routes/api');
const indexRoute = require('./routes/index');

// settings
app.set('port', process.env.PORT || process.env.WEBPORT);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

// routes
app.use('/api', apiRoute);
app.use('/', indexRoute);

// start the service
app.listen(app.get('port'), () => {
	console.log(`Web is on ${app.get('port')}`);
});