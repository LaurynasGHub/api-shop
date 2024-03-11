const express = require('express');
const app = express();
const PORT = 3000;

//routes
app.use('/product', require('./routes/productGetterRoutes'));
app.use('/product', require('./routes/productSetterRoutes'));

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
