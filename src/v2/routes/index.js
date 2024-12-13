const router = require('express').Router();

//static route
router.use('/', require('./static'))

router.use(['/image', '/images'], require('./image'));
router.use(['/shoe', '/shoes'], require('./shoe'));

module.exports = router;