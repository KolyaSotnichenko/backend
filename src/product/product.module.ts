import { Module } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductController } from "./product.controller";
import { ConfigModule } from "@nestjs/config";
import { TypegooseModule } from "nestjs-typegoose";
import { ProductModel } from "./product.model";

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: ProductModel,
        schemaOptions: {
          collection: "Product",
        },
      },
    ]),
    ConfigModule,
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
