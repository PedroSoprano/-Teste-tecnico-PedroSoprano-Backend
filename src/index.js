import express from "express";
import { policyRoutes } from "./Routes/policy.routes";
import { productRoutes } from "./Routes/product.routes";
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const port = 3001;

app.use("/products", productRoutes);
app.use("/policy", policyRoutes);

app.listen(port, () => {
  console.log(`Servidor sendo executado na porta ${port}`);
});

export default app;
