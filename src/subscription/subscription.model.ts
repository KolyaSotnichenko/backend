import { prop } from "@typegoose/typegoose";

export class SubscriptionProductModel {
  @prop()
  title: string;

  @prop()
  description: string;

  @prop()
  image: string;

  @prop()
  price: Object;

  @prop()
  period: string;
}
