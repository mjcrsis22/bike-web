const express = require('express');
const router = express.Router();
const cote = require('cote');

router.get('/', (req, res) => {
	res.render('api');
});

// bikes
	const reqtrBike = new cote.Requester({ name: 'bikes serv requester' });

	const reqtrBikeFn = async (request, callback) => {
		try {
			const response = await reqtrBike.send(request);
			callback.call(request, { status: 'ok', body: response });

		} catch (err) {
			console.log('servBikeError', err);
			callback.call(request, { status: 'error', body: 'Error al intentar conectarse al servicio de bicicletas' });
		}
	};

	router.get('/bikes', (req, res) => {

		const request = { type: 'bikesList' };

		reqtrBikeFn(request, (response) => {
			res.send(response);
		});
	});

	router.get('/bikes/get/:id', (req, res) => {

		const request = {
			type: 'bikesGet',
			id: req.params.id
		};

		reqtrBikeFn(request, (response) => {
			res.send(response);
		});
	});

	router.post('/bikes/add', (req, res) => {

		const request = {
			type: 'bikesAdd',
			body: req.body
		};

		reqtrBikeFn(request, (response) => {
			res.send(response);
		});
	});

	router.put('/bikes/edit', (req, res) => {

		const request = {
			type: 'bikesEdit',
			body: req.body
		};

		reqtrBikeFn(request, (response) => {
			res.send(response);
		});
	});

	router.delete('/bikes/delete/:id', (req, res) => {
		const request = {
			type: 'bikesDelete',
			id: req.params.id
		};

		reqtrBikeFn(request, (response) => {
			res.send(response);
		});
	});

module.exports = router;