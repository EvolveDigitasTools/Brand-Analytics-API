"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shopify_controller_1 = require("../controllers/shopify.controller");
const router = (0, express_1.Router)();
router.post('/new-order', shopify_controller_1.newOrderShopify);
exports.default = router;
