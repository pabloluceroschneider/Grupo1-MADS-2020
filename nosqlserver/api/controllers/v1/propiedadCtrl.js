const Propiedad = require('../../models/propiedadModel');


const get = (req,res) => {
    try{
        console.log('req.body', req.body);
        res.status(200).send({msg:"Ok get"})
    }catch(e){
        res.status(500).send({msg: e})
    }
};

const create = async (req,res) => {
 
    const { ubicacion, habitaciones, lat, longitud, usuario, precios, amenities } = req.body;
    
    await Propiedad.create({ ubicacion, habitaciones, lat, longitud, usuario, precios, amenities });

    res.status(200).send({msg:"Ok post"})
};

module.exports = { get, create };