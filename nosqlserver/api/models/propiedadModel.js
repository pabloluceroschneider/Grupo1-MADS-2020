const mongoose = require('mongoose');

const { Schema } = mongoose;

const propiedadSchema = new Schema({
    id: { type: Number, unique:true},
    ubicacion: String,
    habitaciones: Number,
    fechaPublicacion: { type: Date, default: new Date()},
    lat: String,
    longitud: String,
    usuario: {
        rol: Number,
        descripcion: { type: String, enum: [ "Propietario", "Inmobiliaria", "Inquilino" ]}
    },
    precios: [
        {
            descripcion: String,
            idPrecio: Number,
            monto: Number
          }
    ],
    amenities: [
        {
            descripcion: { type: String, enum: [ "Asador", "Cochera", "Wifi", "Patio", "Balcon", "Ascensor" ]},
            valor: String
        }
    ],
    images: [ { type: String }]
})

const model = mongoose.model("Propiedades", propiedadSchema);

module.exports = model;