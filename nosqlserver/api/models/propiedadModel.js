const mongoose = require('mongoose');

const { Schema } = mongoose;

const propiedadSchema = new Schema({
    id: { type: Number, required:true, unique:true},
    ubicacion: String,
    habitaciones: Number,
    fechaPublicacion: Date,
    lat: String,
    longitud: String,
    usuario: {
        rol: Number,
        descripcion: { type: String, enum: [ "Propietario", "Inmobiliaria", "Inquilino" ]}
    },
    precios: Number,
    amenities: [
        {
            descripcion: { type: String, enum: [ "Asador", "Cochera", "Wifi", "Patio", "Balcon", "Ascensor" ]},
            valor: String
        }
    ]
})

const model = mongoose.model("Propiedad", propiedadSchema);

module.exports = model;