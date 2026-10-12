let products = [
  { id: 1, name: "لوحة مفاتيح ميكانيكية", price: 45 },
  { id: 2, name: "ماوس لاسلكي", price: 20 }
];


exports.getAllProducts = (req, res) => {
  res.status(200).json({
    success: true,
    data: products
  });
};


exports.getProductById = (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "المنتج غير موجود"
    });
  }

  res.status(200).json({
    success: true,
    data: product
  });
};


exports.createProduct = (req, res) => {
  const { name, price } = req.body;

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

  const newId = products.length > 0 ? Math.max(products.map(p => p.id)) + 1 : 1;
  const newProduct = { id: newId, name: name.trim(), price };
  products.push(newProduct);

  res.status(201).json({
    success: true,
    message: "تمت إضافة المنتج بنجاح",
    data: newProduct
  });
};


exports.updateProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "المنتج غير موجود لتعديله"
    });
  }

  const { name, price } = req.body;

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

  product.name = name.trim();
  product.price = price;

  res.status(200).json({
    success: true,
    message: "تم تحديث المنتج بنجاح",
    data: product
  });
};


exports.deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex(p => p.id === id);

  if (productIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "المنتج غير موجود لحذفه"
    });
  }

  const deletedProduct = products.splice(productIndex, 1);

  res.status(200).json({
    success: true,
    message: "تم حذف المنتج بنجاح",
    data: deletedProduct[0]
  });
};
