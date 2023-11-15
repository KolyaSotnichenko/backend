import { Ref, prop } from "@typegoose/typegoose";
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { ProductModel } from "src/product/product.model";
import { SubscriptionProductModel } from "src/subscription/subscription.model";

export interface UserModel extends Base {}

export class UserModel extends TimeStamps {
  @prop({ unique: true })
  email: string;

  @prop()
  password: string;

  @prop()
  address: string;

  @prop()
  organization: string;

  @prop()
  currency: string;

  @prop({ default: false })
  isAdmin?: boolean;

  @prop({ required: true, default: true })
  isActive: boolean;

  @prop({ ref: () => ProductModel })
  products?: Ref<ProductModel>[];

  @prop({ ref: () => SubscriptionProductModel })
  subscriptions?: Ref<SubscriptionProductModel>[];
}
