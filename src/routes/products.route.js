import { Router } from "express";
import productController from "../controllers/product.controller.js"

const router = Router();

router.get("/", productController.getProducts);

export default router;