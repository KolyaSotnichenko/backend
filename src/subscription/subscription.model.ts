import { prop } from "@typegoose/typegoose";

export class SubscriptionProductModel {
  @prop()
  title: string;

  @prop()
  description: string;

  @prop()
  image: string;

  @prop()
  price: number;

  @prop({ required: true })
  startDate: Date;

  @prop({ required: true })
  endDate: Date;
}
