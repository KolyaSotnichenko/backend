import { Ref, prop } from "@typegoose/typegoose";
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { ProductModel } from "src/product/product.model";
import { SubscriptionProductModel } from "src/subscription/subscription.model";
import { UserModel } from "src/user/user.model";

export interface InvoiceModel extends Base {}

export class InvoiceModel extends TimeStamps {
  @prop()
  invoiceNumber: string;

  @prop({ ref: () => UserModel })
  user: Ref<UserModel>;

  @prop({ ref: () => ProductModel })
  products?: Ref<ProductModel>[];

  @prop({ ref: () => SubscriptionProductModel })
  subscriptions?: Ref<SubscriptionProductModel>[];

  @prop()
  total: string;

  @prop()
  counts: Object[];

  @prop()
  currency: string;
}
