import { RequestHandler } from "express";
import Product from "../models/Product";
import Brand from '../models/Brand';

export const newProduct: RequestHandler = async (req, res) => {
    try {
        const { name, mrp, skuId, brandName } = req.body;
        let brand = await Brand.findOne({
            where: {
                name: brandName
            }
        })
        if (!brand)
            brand = await Brand.create({
                name: brandName
            })
        const product = await Product.create({
            name,
            mrp,
            skuId,
            brandId: brand.id
        })
        if(product)
        return res.status(201).json({
            success: true,
            message: 'Product successfully created',
            data: {}
        })        
        return res.status(400).json({
            success: false,
            message: 'Unable to add product, some error occured'
        })

    } catch (error: any) {
        return res.status(504).json({
            success: false,
            message: error.message,
            data: {
                "source": "product.controller.js -> newProduct"
            },
        });
    }
};