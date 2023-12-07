import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
export interface ProductModel extends Base {
}
export declare class ProductModel extends TimeStamps {
    title: string;
    description: string;
    image: string;
    price: Object;
}
