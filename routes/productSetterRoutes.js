const { Router } = require('express');

const router = Router();

//POST /product
router.post('/', (req, res) => {
  res.send('set all products');
});

//PATCH /product
router.patch('/:id', (req, res) => {
  res.send('set product by id');
});

module.exports = router;
