import { IsObject, IsString } from "class-validator";

export class CreateSubscriptionDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  image: string;

  @IsObject()
  price: Object;

  @IsString()
  period: string;
}
