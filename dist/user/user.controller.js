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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const user_decorator_1 = require("./decorators/user.decorator");
const update_user_dto_1 = require("./dto/update-user.dto");
const user_service_1 = require("./user.service");
const id_validation_pipe_1 = require("../pipes/id.validation.pipe");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async getProfile(_id) {
        return this.userService.byId(_id);
    }
    async updateProfile(_id, dto) {
        return this.userService.updateProfile(_id, dto);
    }
    async addProductsToUser(_id, body) {
        const { productIds } = body;
        if (!Array.isArray(productIds)) {
            throw new Error("Неверный формат идентификаторов продуктов");
        }
        return this.userService.addProductsToUser(_id, productIds);
    }
    async removeProductFromUser(_id, body) {
        const { productId } = body;
        return this.userService.removeProductFromUser(_id, productId);
    }
    async addSubscriptionsToUser(_id, body) {
        const { subscriptionIds } = body;
        console.log(subscriptionIds);
        if (!Array.isArray(subscriptionIds)) {
            throw new Error("Неверный формат идентификаторов продуктов");
        }
        return this.userService.addSubscriptionsToUser(_id, subscriptionIds);
    }
    async removeSubscriptionFromUser(_id, body) {
        const { subscriptionId } = body;
        return this.userService.removeSubscriptionFromUser(_id, subscriptionId);
    }
    async updateUser(id, dto) {
        return this.userService.updateProfile(id, dto);
    }
    async getCountUsers() {
        return this.userService.getCount();
    }
    async getUsers(searchTerm) {
        return this.userService.getAll(searchTerm);
    }
    async getUser(id) {
        return this.userService.byId(id);
    }
    async deleteUser(id) {
        return this.userService.delete(id);
    }
    async banUser(id) {
        return await this.userService.banUser(id);
    }
};
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Get)("profile"),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, user_decorator_1.User)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getProfile", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Put)("profile"),
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, user_decorator_1.User)("_id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Put)("profile/add-products"),
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, user_decorator_1.User)("_id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "addProductsToUser", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Put)("profile/remove-product"),
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, user_decorator_1.User)("_id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "removeProductFromUser", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Put)("profile/add-subscriptions"),
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, user_decorator_1.User)("_id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "addSubscriptionsToUser", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Put)("profile/remove-subscription"),
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, user_decorator_1.User)("_id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "removeSubscriptionFromUser", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Put)(":id"),
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)("admin"),
    __param(0, (0, common_1.Param)("id", id_validation_pipe_1.IdValidationPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Get)("count"),
    (0, auth_decorator_1.Auth)("admin"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getCountUsers", null);
__decorate([
    (0, common_1.Get)(),
    (0, auth_decorator_1.Auth)("admin"),
    __param(0, (0, common_1.Query)("searchTerm")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, auth_decorator_1.Auth)("admin"),
    __param(0, (0, common_1.Param)("id", id_validation_pipe_1.IdValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)("admin"),
    __param(0, (0, common_1.Param)("id", id_validation_pipe_1.IdValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.Put)("ban/:id"),
    (0, auth_decorator_1.Auth)("admin"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "banUser", null);
UserController = __decorate([
    (0, common_1.Controller)("users"),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map