const express = require('express');
const productsRoutes = require('./routes/productsRoutes');

const app = express();
const PORT = 3000;

// Middleware لفهم بيانات الـ JSON القادمة في الطلبات
app.use(express.json());

// ربط مسارات المنتجات بالبادئة /api/products
app.use('/api/products', productsRoutes);

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`Server Is running on http://localhost:${PORT}`);
});
