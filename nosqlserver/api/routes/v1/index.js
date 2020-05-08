const propiedad = require("./propiedad-routes");

module.exports = app => {
    app.use('/api/v1/propiedades', propiedad)
}