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
Object.defineProperty(exports, "__esModule", { value: true });
exports.newOrderShopify = void 0;
const newOrderShopify = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = req.body;
        for (const key in order) {
            if (order[key] !== null && order[key] !== undefined) {
                console.log(key, order[key]);
            }
        }
        res.status(200).end();
    }
    catch (error) {
        return res.status(504).json({
            success: false,
            message: error.message,
            data: {
                "source": "bulk-analytics.controller.js -> newOrderShopify"
            }
        });
    }
});
exports.newOrderShopify = newOrderShopify;
