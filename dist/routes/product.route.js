"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_validator_1 = require("../validators/product.validator");
const product_controller_1 = require("../controllers/product.controller");
const router = (0, express_1.Router)();
router.post('/new', product_validator_1.validateProduct, product_controller_1.newProduct);
exports.default = router;
