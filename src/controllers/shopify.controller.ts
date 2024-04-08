import { RequestHandler } from "express";

export const newOrderShopify: RequestHandler = async (req, res) => {
    try {
        const order = req.body;

        for (const key in order) {
            if (order[key] !== null && order[key] !== undefined) {
              console.log(key, order[key]); 
            }
          }
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