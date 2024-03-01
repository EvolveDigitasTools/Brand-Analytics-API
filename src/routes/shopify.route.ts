import { Router } from "express";
import { newOrderShopify } from "../controllers/shopify.controller";

const router = Router();

router.post('/new-order', newOrderShopify)

export default router;