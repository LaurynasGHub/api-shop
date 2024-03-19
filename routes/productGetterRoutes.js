const { Router } = require('express');
const { getAllProducts, getProductById } = require('../controllers');

const router = Router();

//GET /product
router.get('/', async (req, res) => {
  try {
    const data = await getAllProducts();
    res.json(data);
  } catch (error) {
    console.log('Error:', error.message);
    res.status(400).json({ error: error.message });
  }
});

//GET /product/:id
router.get('/:id', async (req, res) => {
  try {
    const data = await getProductById(req.params.id);
    res.json(data);
  } catch (error) {
    console.log('Error:', error.message);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
