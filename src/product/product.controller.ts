import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  Query,
  HttpCode,
  Put,
} from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Auth } from "src/auth/decorators/auth.decorator";
import { IdValidationPipe } from "src/pipes/id.validation.pipe";
import { User } from "src/user/decorators/user.decorator";

@Controller("products")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UsePipes(new ValidationPipe())
  @Post("create")
  @Auth("admin")
  async create(@Body() dto: CreateProductDto) {
    return this.productService.create(dto);
  }

  @UsePipes(new ValidationPipe())
  @Put(":id")
  @HttpCode(200)
  @Auth("admin")
  async updateUser(
    @Param("id", IdValidationPipe) id: string,
    @Body() dto: UpdateProductDto
  ) {
    return this.productService.updateProduct(id, dto);
  }

  @Get()
  @Auth()
  getProducts(@Query("searchTerm") searchTerm?: string) {
    return this.productService.getAll();
  }

  @Get("count")
  @Auth("admin")
  async getCountProducts() {
    return this.productService.getCount();
  }

  @Get(":id")
  @Auth("admin")
  async getProduct(@Param("id", IdValidationPipe) id: string) {
    return this.productService.byId(id);
  }

  @Delete(":id")
  @HttpCode(200)
  @Auth("admin")
  async deleteProduct(@Param("id", IdValidationPipe) id: string) {
    return this.productService.delete(id);
  }
}
