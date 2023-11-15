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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const product_model_1 = require("./product.model");
let ProductService = class ProductService {
    constructor(ProductModel) {
        this.ProductModel = ProductModel;
    }
    async create(dto) {
        const oldProduct = await this.ProductModel.findOne({ title: dto.title });
        if (oldProduct) {
            throw new common_1.BadRequestException("Product with this title is already in the system!");
        }
        const newProduct = new this.ProductModel(dto);
        const product = await newProduct.save();
        return product;
    }
    async byId(_id) {
        const product = await this.ProductModel.findById(_id);
        if (!product)
            throw new common_1.NotFoundException("Product not found!");
        return product;
    }
    async updateProduct(_id, dto) {
        const product = await this.byId(_id);
        product.title = dto.title ? dto.title : product.title;
        product.description = dto.description
            ? dto.description
            : product.description;
        product.image = dto.image ? dto.image : product.image;
        product.price = dto.price ? dto.price : product.price;
        await product.save();
        return;
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
        return this.ProductModel.find(options)
            .select("-updatedAt -__v")
            .sort({
            createdAt: "desc",
        })
            .exec();
    }
    async getCount() {
        return this.ProductModel.find().count().exec();
    }
    async delete(id) {
        return this.ProductModel.findByIdAndDelete(id).exec();
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(product_model_1.ProductModel)),
    __metadata("design:paramtypes", [Object])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map