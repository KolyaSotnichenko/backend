"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceModel = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const defaultClasses_1 = require("@typegoose/typegoose/lib/defaultClasses");
const product_model_1 = require("../product/product.model");
const subscription_model_1 = require("../subscription/subscription.model");
const user_model_1 = require("../user/user.model");
class InvoiceModel extends defaultClasses_1.TimeStamps {
}
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], InvoiceModel.prototype, "invoiceNumber", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => user_model_1.UserModel }),
    __metadata("design:type", Object)
], InvoiceModel.prototype, "user", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => product_model_1.ProductModel }),
    __metadata("design:type", Array)
], InvoiceModel.prototype, "products", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => subscription_model_1.SubscriptionProductModel }),
    __metadata("design:type", Array)
], InvoiceModel.prototype, "subscriptions", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], InvoiceModel.prototype, "total", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Array)
], InvoiceModel.prototype, "counts", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], InvoiceModel.prototype, "currency", void 0);
exports.InvoiceModel = InvoiceModel;
//# sourceMappingURL=invoice.model.js.map