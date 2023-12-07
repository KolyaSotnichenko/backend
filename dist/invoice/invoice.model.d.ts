import { Ref } from "@typegoose/typegoose";
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { ProductModel } from "src/product/product.model";
import { SubscriptionProductModel } from "src/subscription/subscription.model";
import { UserModel } from "src/user/user.model";
export interface InvoiceModel extends Base {
}
export declare class InvoiceModel extends TimeStamps {
    invoiceNumber: string;
    user: Ref<UserModel>;
    products?: Ref<ProductModel>[];
    subscriptions?: Ref<SubscriptionProductModel>[];
    total: string;
    counts: Object[];
    currency: string;
}
