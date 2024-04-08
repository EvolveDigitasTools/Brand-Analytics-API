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
exports.newOrder = void 0;
const models_1 = __importDefault(require("../models"));
const order_model_1 = __importDefault(require("../models/order.model"));
const OrderLocation_1 = __importDefault(require("../models/OrderLocation"));
const orderProduct_model_1 = __importDefault(require("../models/orderProduct.model"));
const newOrder = (orderDetails) => __awaiter(void 0, void 0, void 0, function* () {
    // Create a transaction
    const t = yield models_1.default.transaction();
    try {
        // Create the order
        const order = yield order_model_1.default.create({
            source_order_id: orderDetails.source_order_id,
            cancelledAt: orderDetails.cancelled_at,
            closedAt: orderDetails.closed_at,
            confirmed: orderDetails.confirmed,
            customerEmail: orderDetails.contact_email, // Assuming there's a field for this
            createdAt: orderDetails.created_at,
            currency: orderDetails.currency,
            paymentMode: orderDetails.payment_mode,
            processedAt: orderDetails.processed_at,
            shippingPrice: orderDetails.shipping_price
        }, { transaction: t });
        // Create the order location
        yield OrderLocation_1.default.create(Object.assign(Object.assign({}, orderDetails.order_location), { orderId: order.id // Link to the order
         }), { transaction: t });
        // Create the order items
        for (const item of orderDetails.order_items) {
            yield orderProduct_model_1.default.create({
                orderId: order.id, // Link to the order
                sourceProductId: item.source_product_id,
                quantity: item.quantity,
                finalPrice: item.final_price
            }, { transaction: t });
        }
        // Commit the transaction
        yield t.commit();
    }
    catch (error) {
        // If any operation fails, rollback the transaction
        yield t.rollback();
        throw error; // Rethrow the error for further handling
    }
});
exports.newOrder = newOrder;
