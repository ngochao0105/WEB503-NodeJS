import express from "express";

import router from "./routers";
import logRequestTime from "./middleware/logRequestTime.js";

const app = express();

app.use(express.json());

app.use(logRequestTime);

app.use("/", router);
// app.use("/api/v2", router);



app.listen(3000, () => {
  console.log(`Server is running on port http://localhost:3000`);
});