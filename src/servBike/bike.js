require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

// connect to db
mongoose.connect(
		process.env.BIKEDBLINK,
		{ useNewUrlParser: true }
	)
	.then(db => console.log('db is connected'))
	.catch(err => console.log(err));

// import responders
const indexResponder = require('./responders/index');

// settings
app.set('port', process.env.PORT || process.env.BIKEPORT);

// middlewares
app.use(express.urlencoded({extended: false}));

// start the service
app.listen(app.get('port'), () => {
	console.log(`REDIS_URL ${process.env.REDIS_URL}`);
	console.log(`Bike is on ${app.get('port')}`);
});