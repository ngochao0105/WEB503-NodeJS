import { Router } from "express";

const productRouter = Router();

const products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Phone', price: 500 },
  { id: 3, name: 'Tablet', price: 300 }
];

productRouter.get("/", (req, res) => {
  const { maxPrice } = req.query;
  let result = products;
  if (maxPrice) {
    result = products.filter(p => p.price <= Number(maxPrice));
  }
  res.json(result);
});


// Lấy thông tin sản phẩm theo ID
productRouter.get("/:id", (req, res) => {
  // Lấy id từ URL và chuyển thành số
  const id = Number(req.params.id);
  // Tìm sản phẩm có id trùng khớp
  const product = products.find(p => p.id === id);

  // Nếu không tìm thấy, trả về lỗi 404
  if (!product) {
    return res.status(404).json({ message: "Không tìm thấy sản phẩm với ID này" });
  }

  // Nếu tìm thấy, trả về sản phẩm
  res.json(product);
});

// Tìm kiếm sản phẩm theo tên
productRouter.get("/search", (req, res) => {
  // Lấy tham số name từ query (?name=...)
  const { name } = req.query;

  // Nếu không có name, trả về mảng rỗng
  if (!name) {
    return res.json([]);
  }

  // Lọc sản phẩm có tên chứa chuỗi name (không phân biệt hoa thường)
  const result = products.filter(p =>
    p.name.toLowerCase().includes(name.toLowerCase())
  );

  // Trả về kết quả tìm kiếm
  res.json(result);
});


export default productRouter;