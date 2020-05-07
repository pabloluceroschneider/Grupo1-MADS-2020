const propiedad = require("./propiedad");

module.exports = app => {
    app.use('/api/v1/propiedades', propiedad)
}