const router = require('express').Router();

//STATIC
router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;