import { Injectable, NotFoundException } from "@nestjs/common";
import { SubscriptionProductModel } from "./subscription.model";
import { InjectModel } from "nestjs-typegoose";
import { ModelType } from "@typegoose/typegoose/lib/types";
import { CreateSubscriptionDto } from "./dto/subscription.dto";
import { UpdateSubscriptionDto } from "./dto/update-subscription.dto";

@Injectable()
export class SubscriptionService {
  constructor(
    @InjectModel(SubscriptionProductModel)
    private readonly SubscriptionProductModel: ModelType<SubscriptionProductModel>
  ) {}

  async create(dto: CreateSubscriptionDto) {
    const subscription = new this.SubscriptionProductModel({
      ...dto,
    });
    await subscription.save();

    return subscription;
  }

  async updateSubscription(_id: string, dto: UpdateSubscriptionDto) {
    const subscription = await this.byId(_id);

    subscription.title = dto.title ? dto.title : subscription.title;
    subscription.description = dto.description
      ? dto.description
      : subscription.description;
    subscription.image = dto.image ? dto.image : subscription.image;
    subscription.price = dto.price ? dto.price : subscription.price;
    subscription.period = dto.period ? dto.period : subscription.period;

    await subscription.save();

    return;
  }

  async byId(_id: string) {
    const subscription = await this.SubscriptionProductModel.findById(_id);
    if (!subscription) throw new NotFoundException("Subscription not found!");

    return subscription;
  }

  async getAll(searchTerm?: string) {
    let options = {};

    if (searchTerm) {
      options = {
        $or: [
          {
            email: new RegExp(searchTerm, "i"),
          },
        ],
      };
    }

    return this.SubscriptionProductModel.find(options)
      .select("-updatedAt -__v")
      .sort({
        createdAt: "desc",
      })
      .exec();
  }

  async getCount() {
    return this.SubscriptionProductModel.find().count().exec();
  }

  async delete(id: string) {
    return this.SubscriptionProductModel.findByIdAndDelete(id).exec();
  }
}
