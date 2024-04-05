import { Router } from "express";
import { validateProduct } from "../validators/product.validator";
import { newProduct } from "../controllers/product.controller";

const router = Router();

router.post('/new', validateProduct, newProduct)

export default router;