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


productRouter.get("/search", (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.json([]);
  }
  const result = products.filter(p =>
    p.name.toLowerCase().includes(name.toLowerCase())
  );

  res.json(result);
});

  productRouter.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) {
    return res.status(404).json({ message: "Không tìm thấy sản phẩm với ID này" });
  }
  res.json(product);
});


export default productRouter;