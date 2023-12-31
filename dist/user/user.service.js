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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const bcryptjs_1 = require("bcryptjs");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const user_model_1 = require("./user.model");
const schedule_1 = require("@nestjs/schedule");
const cron_1 = require("cron");
const product_service_1 = require("../product/product.service");
const subscription_service_1 = require("../subscription/subscription.service");
let UserService = class UserService {
    constructor(UserModel, scheduler, productService, subscriptionService) {
        this.UserModel = UserModel;
        this.scheduler = scheduler;
        this.productService = productService;
        this.subscriptionService = subscriptionService;
    }
    async byId(_id) {
        const user = await this.UserModel.findById(_id)
            .populate("products subscriptions")
            .exec();
        if (!user)
            throw new common_1.NotFoundException("User not found!");
        return user;
    }
    async updateProfile(_id, dto) {
        const user = await this.byId(_id);
        const isSameUser = await this.UserModel.findOne({ email: dto.email });
        if (isSameUser && String(_id) !== String(isSameUser._id))
            throw new common_1.NotFoundException("Email busy!");
        if (dto.password) {
            const salt = await (0, bcryptjs_1.genSalt)(10);
            user.password = await (0, bcryptjs_1.hash)(dto.password, salt);
        }
        user.email = dto.email ? dto.email : user.email;
        user.address = dto.address ? dto.address : user.address;
        user.organization = dto.organization ? dto.organization : user.organization;
        user.currency = dto.currency ? dto.currency : user.currency;
        if (dto.isAdmin || dto.isAdmin === false)
            user.isAdmin = dto.isAdmin;
        if (dto.isActive || dto.isActive === false)
            user.isActive = dto.isActive;
        await user.save();
        return;
    }
    async getCount() {
        return this.UserModel.find().count().exec();
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
        return this.UserModel.find(options)
            .select("-password -updatedAt -__v")
            .sort({
            createdAt: "desc",
        })
            .populate("products subscriptions")
            .exec();
    }
    async addProductsToUser(_id, productIds) {
        const user = await this.UserModel.findById(_id);
        if (!user) {
            throw new Error("User not found!");
        }
        const productsToAdd = await Promise.all(productIds.map((productId) => this.productService.byId(productId)));
        user.products = user.products
            ? [...user.products, ...productsToAdd]
            : productsToAdd;
        await user.save();
        return user;
    }
    async addSubscriptionsToUser(_id, subscriptionIds) {
        const user = await this.UserModel.findById(_id);
        if (!user) {
            throw new Error("User not found!");
        }
        const subscriptionsToAdd = await Promise.all(subscriptionIds.map((subscriptionId) => this.subscriptionService.byId(subscriptionId)));
        user.subscriptions = user.subscriptions
            ? [...user.subscriptions, ...subscriptionsToAdd]
            : subscriptionsToAdd;
        await user.save();
        return user;
    }
    async removeProductFromUser(_id, productId) {
        const user = await this.UserModel.findById(_id);
        if (!user) {
            throw new Error("User not found!");
        }
        user.products = user.products.filter((product) => product.toString() !== productId);
        await user.save();
        return user;
    }
    async removeSubscriptionFromUser(_id, subscriptionId) {
        const user = await this.UserModel.findById(_id);
        if (!user) {
            throw new Error("User not found!");
        }
        user.subscriptions = user.subscriptions.filter((subscription) => subscription.toString() !== subscriptionId);
        await user.save();
        return user;
    }
    async delete(id) {
        return this.UserModel.findByIdAndDelete(id).exec();
    }
    async banUser(id) {
        let user = await this.UserModel.findById({ _id: id });
        user.isActive = false;
        this.banned = await this.UserModel.findByIdAndUpdate(user._id, user, {
            new: true,
        });
        const job = new cron_1.CronJob(schedule_1.CronExpression.EVERY_10_SECONDS, async () => {
            let user = await this.UserModel.findById({ _id: id });
            user.isActive = true;
            this.banRemoved = await this.UserModel.findByIdAndUpdate(user._id, user, {
                new: true,
            });
        });
        this.scheduler.addCronJob(`ban ${user._id}`, job);
        job.start();
        setTimeout(() => {
            job.stop();
            console.log("Stop job");
        }, 10100);
        return this.banRemoved;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(user_model_1.UserModel)),
    __metadata("design:paramtypes", [Object, schedule_1.SchedulerRegistry,
        product_service_1.ProductService,
        subscription_service_1.SubscriptionService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map