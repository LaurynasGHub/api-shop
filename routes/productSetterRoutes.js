const { Router } = require('express');
//isiimportinam reikalingus elementus is elementu
const { createProduct, updateProduct } = require('../controllers');

const router = Router();

//POST /product
router.post('/', async (req, res) => {
  try {
    const data = await createProduct(req.body);
    res.send(data);
  } catch (error) {
    console.log('Error:', error.message);
    res.status(400).json({ error: error.message });
  }
});

//PATCH /product
router.patch('/:id', async (req, res) => {
  //updated description
  let updateDesc = 'naujas, paupdatintas description';

  try {
    const data = await updateProduct(req.params.id, updateDesc);

    res.json(data);
  } catch (error) {
    console.log('Error:', error.message);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
