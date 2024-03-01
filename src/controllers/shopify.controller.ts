import { RequestHandler } from "express";

export const newOrderShopify: RequestHandler = async (req, res) => {
    try {
        console.log(req.body);
        return res.send('new order request received')
        
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