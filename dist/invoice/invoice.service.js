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
exports.InvoiceService = void 0;
const common_1 = require("@nestjs/common");
const invoice_model_1 = require("./invoice.model");
const nestjs_typegoose_1 = require("nestjs-typegoose");
let InvoiceService = class InvoiceService {
    constructor(InvoiceModel) {
        this.InvoiceModel = InvoiceModel;
    }
    async create(dto) {
        const newInvoice = new this.InvoiceModel(dto);
        const invoice = await newInvoice.save();
        return invoice;
    }
    async byId(_id) {
        const invoice = await this.InvoiceModel.findById(_id).populate("user products subscriptions");
        if (!invoice)
            throw new common_1.NotFoundException("Invoice not found!");
        return invoice;
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
        return this.InvoiceModel.find(options)
            .select("-updatedAt -__v")
            .sort({
            createdAt: "desc",
        })
            .populate("user products subscriptions")
            .exec();
    }
};
InvoiceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(invoice_model_1.InvoiceModel)),
    __metadata("design:paramtypes", [Object])
], InvoiceService);
exports.InvoiceService = InvoiceService;
//# sourceMappingURL=invoice.service.js.map