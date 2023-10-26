import { Module } from "@nestjs/common";
import { SubscriptionService } from "./subscription.service";
import { SubscriptionController } from "./subscription.controller";
import { SubscriptionProductModel } from "./subscription.model";
import { ConfigModule } from "@nestjs/config";
import { TypegooseModule } from "nestjs-typegoose";

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: SubscriptionProductModel,
        schemaOptions: {
          collection: "Subscription",
        },
      },
    ]),
    ConfigModule,
  ],
  controllers: [SubscriptionController],
  providers: [SubscriptionService],
  exports: [SubscriptionService],
})
export class SubscriptionModule {}
