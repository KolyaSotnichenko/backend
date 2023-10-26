import { Ref } from "@typegoose/typegoose";
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { ProductModel } from "src/product/product.model";
export interface UserModel extends Base {
}
export declare class UserModel extends TimeStamps {
    email: string;
    password: string;
    isAdmin?: boolean;
    isActive: boolean;
    products?: Ref<ProductModel>[];
}
