# Mini Store API

RESTful API مبسط لإدارة منتجات المتجر، مبني باستخدام Node.js و Express ومجهز بحاوية Docker.

## المميزات
- هيكلية MVC منظمة ومفصولة المسارات (Controllers & Routes).
- عمليات CRUD كاملة للمنتجات (عرض الكل، عرض بالمعرف، إضافة، تعديل، حذف).
- التحقق من صحة البيانات المدخلة (Input Validation).
- معالجة مركزية للأخطاء ووسيط 404 للمسارات غير المعرفة.
- تجهيز كامل لبيئة التشغيل عبر Dockerfile.

## مسارات الـ API (Endpoints)
- `GET /api/products` - جلب جميع المنتجات
- `GET /api/products/:id` - جلب منتج محدد
- `POST /api/products` - إضافة منتج جديد
- `PUT /api/products/:id` - تحديث منتج موجود
- `DELETE /api/products/:Id` - حذف منتج

## التشغيل المحلي (Local Run)
```bash
Npm install
Node server.js

