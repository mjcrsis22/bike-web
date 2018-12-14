const cote = require('cote');
const resdrBike = new cote.Responder({ name: 'bikes serv responder' });

const Bike = require('../models/bike');

resdrBike.on('bikesList', async (req, cb) => {
	try {
		var bikes = await Bike.find();
		cb(null, bikes);

	} catch (err) {
		console.log('dbErrorForList', err);
		throw "Error al intentar conectarse a la base de datos, para listar los registros";
	}
});

resdrBike.on('bikesGet', async (req, cb) => {
	try {
		var bike = await Bike.findById(req.id);
		cb(null, bike);

	} catch (err) {
		console.log('dbErrorForGet', err);
		throw "Error al intentar conectarse a la base de datos, para obtener el registro";
	}
});

resdrBike.on('bikesAdd', async (req, cb) => {
	try {
		var bike = new Bike(req.body);
		var newDoc = await bike.save();
		cb(null, newDoc);

	} catch (err) {
		console.log('dbErrorForAdd', err);
		throw "Error al intentar conectarse a la base de datos, para agregar el registro";
	}
});

resdrBike.on('bikesEdit', async (req, cb) => {
	try {
		await Bike.update({ _id: req.body.id }, req.body);
		cb(null, 'Bicicleta Editada');

	} catch (err) {
		console.log('dbErrorForEdit', err);
		throw "Error al intentar conectarse a la base de datos, para editar el registro";
	}
});

resdrBike.on('bikesDelete', async (req, cb) => {
	try {
		await Bike.deleteOne({ _id: req.id });
		cb(null, 'Bicicleta Eliminada');

	} catch (err) {
		console.log('dbErrorForDelete', err);
		throw "Error al intentar conectarse a la base de datos, para eliminar el registro";
	}
});