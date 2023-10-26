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
import { SubscriptionProductModel } from "./subscription.model";
import { ModelType } from "@typegoose/typegoose/lib/types";
import { CreateSubscriptionDto } from "./dto/subscription.dto";
import { UpdateSubscriptionDto } from "./dto/update-subscription.dto";
export declare class SubscriptionService {
    private readonly SubscriptionProductModel;
    constructor(SubscriptionProductModel: ModelType<SubscriptionProductModel>);
    create(dto: CreateSubscriptionDto): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("@typegoose/typegoose/lib/types").DocumentType<SubscriptionProductModel, import("@typegoose/typegoose/lib/types").BeAnObject>> & Omit<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, SubscriptionProductModel> & SubscriptionProductModel & {
        _id: import("mongoose").Types.ObjectId;
    } & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
    updateSubscription(_id: string, dto: UpdateSubscriptionDto): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("@typegoose/typegoose/lib/types").DocumentType<SubscriptionProductModel, import("@typegoose/typegoose/lib/types").BeAnObject>> & Omit<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, SubscriptionProductModel> & SubscriptionProductModel & {
        _id: import("mongoose").Types.ObjectId;
    } & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
    byId(_id: string): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("@typegoose/typegoose/lib/types").DocumentType<SubscriptionProductModel, import("@typegoose/typegoose/lib/types").BeAnObject>> & Omit<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, SubscriptionProductModel> & SubscriptionProductModel & {
        _id: import("mongoose").Types.ObjectId;
    } & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
    getAll(searchTerm?: string): Promise<(import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("@typegoose/typegoose/lib/types").DocumentType<SubscriptionProductModel, import("@typegoose/typegoose/lib/types").BeAnObject>> & Omit<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, SubscriptionProductModel> & SubscriptionProductModel & {
        _id: import("mongoose").Types.ObjectId;
    } & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>)[]>;
    getCount(): Promise<number>;
    delete(id: string): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("@typegoose/typegoose/lib/types").DocumentType<SubscriptionProductModel, import("@typegoose/typegoose/lib/types").BeAnObject>> & Omit<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, SubscriptionProductModel> & SubscriptionProductModel & {
        _id: import("mongoose").Types.ObjectId;
    } & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
}
