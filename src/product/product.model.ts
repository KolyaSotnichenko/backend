import { prop } from "@typegoose/typegoose";
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";

export interface ProductModel extends Base {}

export class ProductModel extends TimeStamps {
  @prop({ unique: true })
  title: string;

  @prop()
  description: string;

  @prop()
  image: string;

  @prop()
  price: Object;
}
