import { IsArray, IsObject, IsString } from "class-validator";

export class CreateInvoiceDto {
  @IsString()
  invoiceNumber: string;

  @IsString()
  user: string;

  @IsArray()
  @IsString({ each: true })
  products: string[];

  @IsArray()
  @IsString({ each: true })
  subscriptions: string[];

  @IsString()
  total: string;

  @IsArray()
  @IsObject({ each: true })
  counts: Object[];

  @IsString()
  currency: string;
}
