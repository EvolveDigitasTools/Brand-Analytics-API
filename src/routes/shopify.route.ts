import { Router } from "express";
import { newOrderShopify } from "../controllers/shopify.controller";

const router = Router();

router.post('/new-order', newOrderShopify)
router.get("/", async (req, res) => {
	res.status(200).send(`Shopify Api is working`);
});

export default router;