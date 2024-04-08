"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newProduct = void 0;
const Product_1 = __importDefault(require("../models/Product"));
const Brand_1 = __importDefault(require("../models/Brand"));
const newProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.time('newProduct function');
        const { name, mrp, skuId, brandName } = req.body;
        let brand = yield Brand_1.default.findOne({
            where: {
                name: brandName
            }
        });
        if (!brand)
            brand = yield Brand_1.default.create({
                name: brandName
            });
        const product = yield Product_1.default.create({
            name,
            mrp,
            skuId,
            brandId: brand.id
        });
        if (product)
            return res.status(201).json({
                success: true,
                message: 'Product successfully created',
                data: {}
            });
        console.timeEnd('newProduct function');
        return res.status(400).json({
            success: false,
            message: 'Unable to add product, some error occured'
        });
    }
    catch (error) {
        return res.status(504).json({
            success: false,
            message: error.message,
            data: {
                "source": "product.controller.js -> newProduct"
            },
        });
    }
});
exports.newProduct = newProduct;
