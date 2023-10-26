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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionService = void 0;
const common_1 = require("@nestjs/common");
const subscription_model_1 = require("./subscription.model");
const nestjs_typegoose_1 = require("nestjs-typegoose");
let SubscriptionService = class SubscriptionService {
    constructor(SubscriptionProductModel) {
        this.SubscriptionProductModel = SubscriptionProductModel;
    }
    async create(dto) {
        const startDate = new Date();
        const endDate = new Date();
        if (dto.period === "1 month") {
            endDate.setMonth(endDate.getMonth() + 1);
        }
        if (dto.period === "3 month") {
            endDate.setMonth(endDate.getMonth() + 3);
        }
        if (dto.period === "1 year") {
            endDate.setFullYear(endDate.getFullYear() + 1);
        }
        const subscription = new this.SubscriptionProductModel(Object.assign(Object.assign({}, dto), { startDate,
            endDate }));
        await subscription.save();
        return subscription;
    }
    async updateSubscription(_id, dto) {
        return await this.SubscriptionProductModel.findByIdAndUpdate(_id, { $set: dto }, { new: true });
    }
    async byId(_id) {
        const subscription = await this.SubscriptionProductModel.findById(_id);
        if (!subscription)
            throw new common_1.NotFoundException("Subscription not found!");
        return subscription;
    }
    async getAll(searchTerm) {
        let options = {};
        if (searchTerm) {
            options = {
                $or: [
                    {
                        email: new RegExp(searchTerm, "i"),
                    },
                ],
            };
        }
        return this.SubscriptionProductModel.find(options)
            .select("-updatedAt -__v")
            .sort({
            createdAt: "desc",
        })
            .exec();
    }
    async getCount() {
        return this.SubscriptionProductModel.find().count().exec();
    }
    async delete(id) {
        return this.SubscriptionProductModel.findByIdAndDelete(id).exec();
    }
};
SubscriptionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(subscription_model_1.SubscriptionProductModel)),
    __metadata("design:paramtypes", [Object])
], SubscriptionService);
exports.SubscriptionService = SubscriptionService;
//# sourceMappingURL=subscription.service.js.map