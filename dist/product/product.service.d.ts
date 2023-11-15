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
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ModelType } from "@typegoose/typegoose/lib/types";
import { ProductModel } from "./product.model";
export declare class ProductService {
    private readonly ProductModel;
    constructor(ProductModel: ModelType<ProductModel>);
    create(dto: CreateProductDto): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("@typegoose/typegoose/lib/types").DocumentType<ProductModel, import("@typegoose/typegoose/lib/types").BeAnObject>> & Omit<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, ProductModel> & ProductModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction, never>>;
    byId(_id: string): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("@typegoose/typegoose/lib/types").DocumentType<ProductModel, import("@typegoose/typegoose/lib/types").BeAnObject>> & Omit<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, ProductModel> & ProductModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction, never>>;
    updateProduct(_id: string, dto: UpdateProductDto): Promise<void>;
    getAll(searchTerm?: string): Promise<(import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("@typegoose/typegoose/lib/types").DocumentType<ProductModel, import("@typegoose/typegoose/lib/types").BeAnObject>> & Omit<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, ProductModel> & ProductModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction, never>)[]>;
    getCount(): Promise<number>;
    delete(id: string): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("@typegoose/typegoose/lib/types").DocumentType<ProductModel, import("@typegoose/typegoose/lib/types").BeAnObject>> & Omit<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, ProductModel> & ProductModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction, never>>;
}
