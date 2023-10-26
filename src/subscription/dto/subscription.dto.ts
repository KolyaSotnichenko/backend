import { IsString } from "class-validator";

export class CreateSubscriptionDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  image: string;

  @IsString()
  price: number;
}
