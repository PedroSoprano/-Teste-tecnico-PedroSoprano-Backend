import { Router } from "express";
import {
  createProductsController,
  listProducts,
  listProductsController,
} from "../controllers/product.controllers";

export const productRoutes = Router();

// productRoutes.post("", createProductsController);
productRoutes.get("", listProductsController);
