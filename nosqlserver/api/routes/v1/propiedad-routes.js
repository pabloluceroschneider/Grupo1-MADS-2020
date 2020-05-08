const express = require('express');
const propiedadCtrl = require('../../controllers/v1/propiedadCtrl');

const router = express.Router();

router.get('/propiedades', propiedadCtrl.get);
router.post('/propiedades', propiedadCtrl.create);

module.exports = router;
