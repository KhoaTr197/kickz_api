const router = require('express').Router();

const availableResources = [
  'shoes',
  'image'
];

//STATIC
router.get('/', (req, res) => {
  res.render('index');
});

router.get('/docs', (req, res) => {
  res.render('docs');
});

router.get('/docs/:resource', (req, res) => {
  const resource = (req.params.resource || "").toLowerCase();

  if(!availableResources.includes(resource))
    return;

  res.render(`docs-${resource}`);
});

module.exports = router;