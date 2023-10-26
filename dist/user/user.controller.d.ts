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
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserService } from "./user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getProfile(_id: string): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("@typegoose/typegoose").DocumentType<import("./user.model").UserModel, import("@typegoose/typegoose/lib/types").BeAnObject>> & Omit<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("./user.model").UserModel> & import("./user.model").UserModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction, never>>;
    updateProfile(_id: string, dto: UpdateUserDto): Promise<void>;
    addProductsToUser(_id: string, body: {
        productIds: string[];
    }): Promise<import("./user.model").UserModel>;
    removeProductFromUser(_id: string, body: {
        productId: string;
    }): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("@typegoose/typegoose").DocumentType<import("./user.model").UserModel, import("@typegoose/typegoose/lib/types").BeAnObject>> & Omit<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("./user.model").UserModel> & import("./user.model").UserModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction, never>>;
    addSubscriptionsToUser(_id: string, body: {
        subscriptionIds: string[];
    }): Promise<import("./user.model").UserModel>;
    removeSubscriptionFromUser(_id: string, body: {
        subscriptionId: string;
    }): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("@typegoose/typegoose").DocumentType<import("./user.model").UserModel, import("@typegoose/typegoose/lib/types").BeAnObject>> & Omit<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("./user.model").UserModel> & import("./user.model").UserModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction, never>>;
    updateUser(id: string, dto: UpdateUserDto): Promise<void>;
    getCountUsers(): Promise<number>;
    getUsers(searchTerm?: string): Promise<Omit<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("@typegoose/typegoose").DocumentType<import("./user.model").UserModel, import("@typegoose/typegoose/lib/types").BeAnObject>> & Omit<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("./user.model").UserModel> & import("./user.model").UserModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction, never>, never>[]>;
    getUser(id: string): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("@typegoose/typegoose").DocumentType<import("./user.model").UserModel, import("@typegoose/typegoose/lib/types").BeAnObject>> & Omit<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("./user.model").UserModel> & import("./user.model").UserModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction, never>>;
    deleteUser(id: string): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("@typegoose/typegoose").DocumentType<import("./user.model").UserModel, import("@typegoose/typegoose/lib/types").BeAnObject>> & Omit<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("./user.model").UserModel> & import("./user.model").UserModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction, never>>;
    banUser(id: string): Promise<import("./user.model").UserModel>;
}
