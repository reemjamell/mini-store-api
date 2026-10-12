const express = require('express');
const productsRoutes = require('./routes/productsRoutes.js');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());


app.use('/api/products', productsRoutes);


app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: `المسار المطلوب ${req.originalUrl} غير موجود`
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "حدث خطأ داخلي في الخادم"
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
