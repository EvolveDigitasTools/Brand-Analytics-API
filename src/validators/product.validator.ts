import { RequestHandler } from "express";
import Joi from "joi";

export const validateProduct: RequestHandler = async (req, res, next) => {
    try {
        const productSchema = Joi.object({
            skuId: Joi.string().required(),
            name: Joi.string(),
            brandName: Joi.string(),
            mrp: Joi.number(),
        })

        await productSchema.validateAsync(req.body)
        next();
    } catch (error: any) {
        return res.status(504).json({
            success: false,
            message: error.message,
            data: []
        })
    }
}