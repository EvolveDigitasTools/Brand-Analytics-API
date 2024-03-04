import { RequestHandler } from "express";

export const newOrderShopify: RequestHandler = async (req, res) => {
    try {
        const order = req.body;

        // Process the order object
        console.log(Object.keys(order));

        // Respond to Shopify to acknowledge receipt of the webhook
        res.status(200).end();

    } catch (error: any) {
        return res.status(504).json({
            success: false,
            message: error.message,
            data: {
                "source": "bulk-analytics.controller.js -> newOrderShopify"
            }
        })
    }
}