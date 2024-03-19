const { Router } = require('express');
//isiimportinam reikalingus elementus is elementu
const { createProduct, updateProduct } = require('../controllers');

const router = Router();

//POST /product
//sitoj vietoj sukuriamas/gaunamas kelias, siuo atveju po adreso ten https:/.../
router.post('/', async (req, res) => {
  //try catch block- gaudo errorus, try vykdo funkcija o catch gaudo jei yra erroru is tos funkcijos
  try {
    const data = await createProduct(req.body);
    res.send(data);
  } catch (error) {
    console.log('Error:', error.message);
    res.status(400).json({ error: error.message });
  }
});

//PATCH /product
//sitoj vietoj sukuriamas/gaunamas kelias, siuo atveju po adreso ten https:/.../id <- id cia yra kazkokio produkto id
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
