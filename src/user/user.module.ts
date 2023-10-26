import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { ConfigModule } from "@nestjs/config";
import { TypegooseModule } from "nestjs-typegoose";
import { UserModel } from "./user.model";
import { ProductService } from "src/product/product.service";
import { ProductModule } from "src/product/product.module";
import { SubscriptionModule } from "src/subscription/subscription.module";

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: UserModel,
        schemaOptions: {
          collection: "User",
        },
      },
    ]),
    ConfigModule,
    ProductModule,
    SubscriptionModule,
  ],
})
export class UserModule {}
