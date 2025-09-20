import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/api/posts/greet", (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).json({ error: "Tên của bạn đang trống" });
  }
  res.json({ message: `Hello, ${name}!` });
});

app.listen(3000, () => {
  console.log(`Server is running on port http://localhost:3000`);
})