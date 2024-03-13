const { Router } = require('express');
const { setAllProducts, setProductById } = require('../controllers');

const router = Router();

//POST /product
router.post('/', async (req, res) => {
  try {
    const data = await setAllProducts(req.body);
    res.send(data);
  } catch (error) {
    console.log('Error:', error.message);
    res.status(400).json({ error: error.message });
    // res.json({ error: error.message });
  }
});

//PATCH /product
router.patch('/:id', (req, res) => {
  const data = setProductById();

  res.json(data);
});

module.exports = router;
