const express = require('express');
const propiedadCtrl = require('../../controllers/v1/propiedadCtrl');

const router = express.Router();

router.get('/', propiedadCtrl.get);
router.post('/', propiedadCtrl.create);

module.exports = router;
