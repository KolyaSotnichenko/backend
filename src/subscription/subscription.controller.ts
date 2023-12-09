import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { SubscriptionService } from "./subscription.service";
import { CreateSubscriptionDto } from "./dto/subscription.dto";
import { Auth } from "src/auth/decorators/auth.decorator";
import { IdValidationPipe } from "src/pipes/id.validation.pipe";
import { UpdateSubscriptionDto } from "./dto/update-subscription.dto";

@Controller("subscriptions")
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @UsePipes(new ValidationPipe())
  @Post("create")
  @Auth("admin")
  async create(@Body() dto: CreateSubscriptionDto) {
    return this.subscriptionService.create(dto);
  }

  @UsePipes(new ValidationPipe())
  @Put(":id")
  @HttpCode(200)
  @Auth("admin")
  async updateSubscription(
    @Param("id", IdValidationPipe) id: string,
    @Body() dto: UpdateSubscriptionDto
  ) {
    return this.subscriptionService.updateSubscription(id, dto);
  }

  @Get(":id")
  @Auth()
  async getSubscription(@Param("id", IdValidationPipe) id: string) {
    return this.subscriptionService.byId(id);
  }

  @Get()
  @Auth()
  getSubscriptions(@Query("searchTerm") searchTerm?: string) {
    return this.subscriptionService.getAll();
  }

  @Get("count")
  @Auth()
  async getCountSubscriptions() {
    return this.subscriptionService.getCount();
  }

  @Delete(":id")
  @HttpCode(200)
  @Auth("admin")
  async deleteSubscription(@Param("id", IdValidationPipe) id: string) {
    return this.subscriptionService.delete(id);
  }
}
