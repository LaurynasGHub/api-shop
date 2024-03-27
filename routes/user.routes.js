const { Router } = require('express');
const { registerUser } = require('../controllers');

const router = Router();

//GET /user

router.get('/', async (req, res) => {
  try {
    const data = await registerUser();

    res.json(data);
  } catch (error) {
    console.log('Error:', error.message);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
