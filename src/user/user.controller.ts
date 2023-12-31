import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { Auth } from "src/auth/decorators/auth.decorator";
import { User } from "./decorators/user.decorator";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserService } from "./user.service";
import { IdValidationPipe } from "src/pipes/id.validation.pipe";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UsePipes(new ValidationPipe())
  @Get("profile")
  @Auth()
  async getProfile(@User("_id") _id: string) {
    return this.userService.byId(_id);
  }

  @UsePipes(new ValidationPipe())
  @Put("profile")
  @HttpCode(200)
  @Auth()
  async updateProfile(@User("_id") _id: string, @Body() dto: UpdateUserDto) {
    return this.userService.updateProfile(_id, dto);
  }

  @UsePipes(new ValidationPipe())
  @Put("profile/add-products")
  @HttpCode(200)
  @Auth()
  async addProductsToUser(
    @User("_id") _id: string,
    @Body() body: { productIds: string[] }
  ) {
    const { productIds } = body;

    if (!Array.isArray(productIds)) {
      throw new Error("Неверный формат идентификаторов продуктов");
    }

    return this.userService.addProductsToUser(_id, productIds);
  }

  @UsePipes(new ValidationPipe())
  @Put("profile/remove-product")
  @HttpCode(200)
  @Auth()
  async removeProductFromUser(
    @User("_id") _id: string,
    @Body() body: { productId: string }
  ) {
    const { productId } = body;

    return this.userService.removeProductFromUser(_id, productId);
  }

  @UsePipes(new ValidationPipe())
  @Put("profile/add-subscriptions")
  @HttpCode(200)
  @Auth()
  async addSubscriptionsToUser(
    @User("_id") _id: string,
    @Body() body: { subscriptionIds: string[] }
  ) {
    const { subscriptionIds } = body;

    console.log(subscriptionIds);

    if (!Array.isArray(subscriptionIds)) {
      throw new Error("Неверный формат идентификаторов продуктов");
    }

    return this.userService.addSubscriptionsToUser(_id, subscriptionIds);
  }

  @UsePipes(new ValidationPipe())
  @Put("profile/remove-subscription")
  @HttpCode(200)
  @Auth()
  async removeSubscriptionFromUser(
    @User("_id") _id: string,
    @Body() body: { subscriptionId: string }
  ) {
    const { subscriptionId } = body;

    return this.userService.removeSubscriptionFromUser(_id, subscriptionId);
  }

  @UsePipes(new ValidationPipe())
  @Put(":id")
  @HttpCode(200)
  @Auth("admin")
  async updateUser(
    @Param("id", IdValidationPipe) id: string,
    @Body() dto: UpdateUserDto
  ) {
    return this.userService.updateProfile(id, dto);
  }

  @Get("count")
  @Auth("admin")
  async getCountUsers() {
    return this.userService.getCount();
  }

  @Get()
  @Auth("admin")
  async getUsers(@Query("searchTerm") searchTerm?: string) {
    return this.userService.getAll(searchTerm);
  }

  @Get(":id")
  @Auth("admin")
  async getUser(@Param("id", IdValidationPipe) id: string) {
    return this.userService.byId(id);
  }

  @Delete(":id")
  @HttpCode(200)
  @Auth("admin")
  async deleteUser(@Param("id", IdValidationPipe) id: string) {
    return this.userService.delete(id);
  }

  @Put("ban/:id")
  @Auth("admin")
  async banUser(@Param("id") id: string) {
    return await this.userService.banUser(id);
  }
}
