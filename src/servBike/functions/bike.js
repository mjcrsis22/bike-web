const Bike = require('../models/bike');

const _fn_bikes = {
    bikesList: async (req, cb) => {
        console.log(`bikesList request`);
        try {
            var bikes = await Bike.find();
            cb(null, { status: '', body: bikes});

        } catch (err) {
            console.log('dbErrorForList', err);
            cb(null, { status: 'error', body: "Error al intentar conectarse a la base de datos, para listar los registros" });
        }
    },

    bikesGet: async (req, cb) => {
        try {
            var bike = await Bike.findById(req.id);
            cb(null, { status: '', body: bike});

        } catch (err) {
            console.log('dbErrorForGet', err);
            cb(null, { status: 'error', body: "Error al intentar conectarse a la base de datos, para obtener el registro" });
        }
    },

    bikesAdd: async (req, cb) => {
        try {
            var bike = new Bike(req.body);
            var newDoc = await bike.save();
            cb(null, { status: '', body: newDoc});

        } catch (err) {
            console.log('dbErrorForAdd', err);
            cb(null, { status: 'error', body: "Error al intentar conectarse a la base de datos, para agregar el registro" });
        }
    },

    bikesEdit: async (req, cb) => {
        try {
            await Bike.update({ _id: req.body.id }, req.body);
            cb(null, { status: '', body: 'Bicicleta Editada'});

        } catch (err) {
            console.log('dbErrorForEdit', err);
            cb(null, { status: 'error', body: "Error al intentar conectarse a la base de datos, para editar el registro" });
        }
    },

    bikesDelete: async (req, cb) => {
        try {
            await Bike.deleteOne({ _id: req.id });
            cb(null, { status: '', body: 'Bicicleta Eliminada'});

        } catch (err) {
            console.log('dbErrorForDelete', err);
            cb(null, { status: 'error', body: "Error al intentar conectarse a la base de datos, para eliminar el registro" });
        }
    }
};

module.exports = _fn_bikes;