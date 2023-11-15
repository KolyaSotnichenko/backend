/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(dto: CreateProductDto): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("@typegoose/typegoose").DocumentType<import("./product.model").ProductModel, import("@typegoose/typegoose/lib/types").BeAnObject>> & Omit<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("./product.model").ProductModel> & import("./product.model").ProductModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction, never>>;
    updateProduct(id: string, dto: UpdateProductDto): Promise<void>;
    getProducts(searchTerm?: string): Promise<(import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("@typegoose/typegoose").DocumentType<import("./product.model").ProductModel, import("@typegoose/typegoose/lib/types").BeAnObject>> & Omit<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("./product.model").ProductModel> & import("./product.model").ProductModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction, never>)[]>;
    getCountProducts(): Promise<number>;
    getProduct(id: string): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("@typegoose/typegoose").DocumentType<import("./product.model").ProductModel, import("@typegoose/typegoose/lib/types").BeAnObject>> & Omit<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("./product.model").ProductModel> & import("./product.model").ProductModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction, never>>;
    deleteProduct(id: string): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("@typegoose/typegoose").DocumentType<import("./product.model").ProductModel, import("@typegoose/typegoose/lib/types").BeAnObject>> & Omit<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("./product.model").ProductModel> & import("./product.model").ProductModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction, never>>;
}
