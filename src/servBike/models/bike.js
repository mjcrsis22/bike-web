const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BikeSchema = new Schema({
	nombre: {
		type: String,
		required: true
	},
	modelo: {
		type: String,
		required: true
	},
	color: {
		type: String,
		required: true
	},
	rodado: {
		type: String,
		required: true
	},
	precio: {
		type: Number,
		required: true,
		default: 0
	}
});

module.exports = mongoose.model('bikes', BikeSchema);