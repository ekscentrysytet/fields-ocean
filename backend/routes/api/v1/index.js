const router = require('express').Router();

router.use('/fields', require('./fields'));

module.exports = router;