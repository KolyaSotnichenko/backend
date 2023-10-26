import { PartialType } from "@nestjs/mapped-types";
import { CreateProductDto } from "./create-product.dto";
import { IsString } from "class-validator";

export class UpdateProductDto {
  title?: string;

  description?: string;

  image?: string;

  price?: string;
}
