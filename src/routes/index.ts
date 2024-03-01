import { Router } from "express";

import bulkAnalyticsRouter from './bulk-analytics.route';
import shopifyRouter from './shopify.route';

const router = Router();

router.get("/", async (req, res) => {
	res.status(200).send("Api is working");
});

router.use("/bulk-analytics", bulkAnalyticsRouter);
router.use("/shopify-events", shopifyRouter);

export default router;