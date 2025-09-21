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

app.get("/api/posts/sum", (req, res) => {
  const { a, b } = req.query;

  if (!a || !b) {
    return res.status(400).json({ error: "Missing 'a' or 'b' query parameter" });
  }

  const numA = Number(a);
  const numB = Number(b);

  if (isNaN(numA) || isNaN(numB)) {
    return res.status(400).json({ error: "'a' and 'b' must be numbers" });
  }

  const sum = numA + numB;
  res.json({ a: numA, b: numB, sum });
});

app.listen(3000, () => {
  console.log(`Server is running on port http://localhost:3000`);
})