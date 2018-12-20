const cote = require('cote');
const resdrBike = new cote.Responder({ name: 'bikes serv responder' });

const _fn_bikes = require('../functions/bike');

resdrBike.on('bikesList', (req, cb) => {
	_fn_bikes.bikesList(req, cb);
});

resdrBike.on('bikesGet', (req, cb) => {
	_fn_bikes.bikesGet(req, cb);
});

resdrBike.on('bikesAdd', (req, cb) => {
	_fn_bikes.bikesAdd(req, cb);
});

resdrBike.on('bikesEdit', (req, cb) => {
	_fn_bikes.bikesEdit(req, cb);
});

resdrBike.on('bikesDelete', (req, cb) => {
	_fn_bikes.bikesDelete(req, cb);
});