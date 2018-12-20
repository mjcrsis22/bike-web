const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// connect to db
mongoose.connect(
        process.env.BIKEDBLINK,
        { useNewUrlParser: true }
    )
    .then(db => console.log('db is connected'))
    .catch(err => console.log(err));

router.get('/', (req, res) => {
	res.render('api');
});

const _fn_bikes = require('../../servBike/functions/bike');

// bikes
	router.get('/bikes', (req, res) => {

		var param = null;

		_fn_bikes.bikesList(param, (scope, response) => {
			res.json(response);
		});
	});

	router.get('/bikes/get/:id', (req, res) => {

		var param = req.params.id;

		_fn_bikes.bikesGet(param, (scope, response) => {
			res.json(response);
		});
	});

	router.post('/bikes/add', (req, res) => {

		var param = req.body;

		_fn_bikes.bikesAdd(param, (scope, response) => {
			res.json(response);
		});
	});

	router.put('/bikes/edit', (req, res) => {

		var param = req.body;

		_fn_bikes.bikesEdit(param, (scope, response) => {
			res.json(response);
		});
	});

	router.delete('/bikes/delete/:id', (req, res) => {

		var param = req.params.id;

		_fn_bikes.bikesDelete(param, (scope, response) => {
			res.json(response);
		});
	});

module.exports = router;