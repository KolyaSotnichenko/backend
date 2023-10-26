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
    const startDate = new Date();
    const endDate = new Date();

    if (dto.period === "1 month") {
      endDate.setMonth(endDate.getMonth() + 1);
    }

    if (dto.period === "3 month") {
      endDate.setMonth(endDate.getMonth() + 3);
    }

    if (dto.period === "1 year") {
      endDate.setFullYear(endDate.getFullYear() + 1);
    }

    const subscription = new this.SubscriptionProductModel({
      ...dto,
      startDate,
      endDate,
    });
    await subscription.save();

    return subscription;
  }

  async updateSubscription(_id: string, dto: UpdateSubscriptionDto) {
    return await this.SubscriptionProductModel.findByIdAndUpdate(
      _id,
      { $set: dto },
      { new: true }
    );
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
