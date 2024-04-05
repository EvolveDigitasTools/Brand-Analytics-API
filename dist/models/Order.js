"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
const Product_1 = __importDefault(require("./Product"));
const OrderProduct_1 = __importDefault(require("./OrderProduct"));
const OrderLocation_1 = __importDefault(require("./OrderLocation"));
class Order extends sequelize_1.Model {
    static associate() {
        Order.belongsToMany(Product_1.default, { through: OrderProduct_1.default, foreignKey: 'orderId' });
        Order.hasOne(OrderLocation_1.default, { foreignKey: 'orderId', as: 'location' });
    }
}
Order.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    source_order_id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
    },
    cancelledAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    closedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    confirmed: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    custormerId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    currency: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: 'INR'
    },
    financial_status: {
        type: sequelize_1.DataTypes.STRING,
    },
    fulfillment_status: {
        type: sequelize_1.DataTypes.STRING
    },
    shipping_price: {
        type: sequelize_1.DataTypes.NUMBER
    }
}, {
    sequelize: index_1.default,
    modelName: 'Order',
    timestamps: true,
});
exports.default = Order;
