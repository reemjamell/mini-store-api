// مصفوفة مؤقتة لتخزين المنتجات في الذاكرة
let products = [
  { id: 1, name: "لوحة مفاتيح ميكانيكية", price: 45 },
  { id: 2, name: "ماوس لاسلكي", price: 20 }
];

// 1. دالة جلب جميع المنتجات (GET)
exports.getAllProducts = (req, res) => {
  res.status(200).json({
    success: true,
    data: products
  });
};

// 2. دالة إضافة منتج جديد (POST) مع التحقق من المدخلات
exports.createProduct = (req, res) => {
  const { name, price } = req.body;

  // فحص: هل الاسم موجود؟ وهل السعر رقم وموجب؟
  if (!name || typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({
      success: false,
      message: "اسم المنتج مطلوب ويجب أن يكون نصاً صالحاً"
    });
  }

  if (price === undefined || typeof price !== 'number' || price <= 0) {
    return res.status(400).json({
      success: false,
      message: "السعر مطلوب ويجب أن يكون رقماً أكبر من صفر"
    });
  }

  // إنشاء المنتج الجديد وإضافته
  const newProduct = {
    id: products.length + 1,
    name: name.trim(),
    price: price
  };

  products.push(newProduct);

  // إرجاع كود 201 مع المنتج الذي تم إنشاؤه
  res.status(201).json({
    success: true,
    message: "تمت إضافة المنتج بنجاح",
    data: newProduct
  });
};
