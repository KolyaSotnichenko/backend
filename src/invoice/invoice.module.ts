import { Module } from "@nestjs/common";
import { InvoiceService } from "./invoice.service";
import { InvoiceController } from "./invoice.controller";
import { TypegooseModule } from "nestjs-typegoose";
import { InvoiceModel } from "./invoice.model";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: InvoiceModel,
        schemaOptions: {
          collection: "Invoice",
        },
      },
    ]),
    ConfigModule,
  ],
  controllers: [InvoiceController],
  providers: [InvoiceService],
})
export class InvoiceModule {}
