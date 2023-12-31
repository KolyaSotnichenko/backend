import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypegooseModule } from "nestjs-typegoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { getMongoDbConfig } from "./config/mongo.config";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./user/user.module";
import { ScheduleModule } from "@nestjs/schedule";
import { PaymentsModule } from "./payments/payments.module";
import { ProductModule } from "./product/product.module";
import { SubscriptionModule } from "./subscription/subscription.module";
import { InvoiceModule } from './invoice/invoice.module';
import { FileModule } from './file/file.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypegooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoDbConfig,
    }),
    AuthModule,
    UserModule,
    ScheduleModule.forRoot(),
    PaymentsModule,
    ProductModule,
    SubscriptionModule,
    InvoiceModule,
    FileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
