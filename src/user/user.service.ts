import { Injectable, NotFoundException } from "@nestjs/common";
import { ModelType } from "@typegoose/typegoose/lib/types";
import { genSalt, hash } from "bcryptjs";
import { InjectModel } from "nestjs-typegoose";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserModel } from "./user.model";
import { CronExpression, SchedulerRegistry } from "@nestjs/schedule";
import { CronJob } from "cron";
import { ProductService } from "src/product/product.service";

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel) private readonly UserModel: ModelType<UserModel>,
    private scheduler: SchedulerRegistry,
    private readonly productService: ProductService
  ) {}

  private banned: UserModel;
  private banRemoved: UserModel;

  async byId(_id: string) {
    const user = await this.UserModel.findById(_id).populate("products").exec();
    if (!user) throw new NotFoundException("User not found!");

    return user;
  }

  async updateProfile(_id: string, dto: UpdateUserDto) {
    const user = await this.byId(_id);
    const isSameUser = await this.UserModel.findOne({ email: dto.email });

    if (isSameUser && String(_id) !== String(isSameUser._id))
      throw new NotFoundException("Email busy!");

    if (dto.password) {
      const salt = await genSalt(10);
      user.password = await hash(dto.password, salt);
    }

    user.email = dto.email;

    if (dto.isAdmin || dto.isAdmin === false) user.isAdmin = dto.isAdmin;

    await user.save();

    return;
  }

  async getCount() {
    return this.UserModel.find().count().exec();
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

    return this.UserModel.find(options)
      .select("-password -updatedAt -__v")
      .sort({
        createdAt: "desc",
      })
      .populate("products")
      .exec();
  }

  async addProductsToUser(
    _id: string,
    productIds: string[]
  ): Promise<UserModel> {
    const user = await this.UserModel.findById(_id);

    if (!user) {
      throw new Error("Пользователь не найден");
    }

    const productsToAdd = await Promise.all(
      productIds.map((productId) => this.productService.byId(productId))
    );
    user.products = user.products
      ? [...user.products, ...productsToAdd]
      : productsToAdd;
    await user.save();

    return user;
  }

  async removeProductFromUser(_id: string, productId: string) {
    const user = await this.UserModel.findById(_id);

    if (!user) {
      throw new Error("User not found!");
    }

    user.products = user.products.filter(
      (product) => product.toString() !== productId
    );

    await user.save();

    return user;
  }

  async delete(id: string) {
    //перевірка на борги
    return this.UserModel.findByIdAndDelete(id).exec();
  }

  async banUser(id: string) {
    let user = await this.UserModel.findById({ _id: id });

    user.isActive = false;

    this.banned = await this.UserModel.findByIdAndUpdate(user._id, user, {
      new: true,
    });

    const job: CronJob = new CronJob(
      CronExpression.EVERY_10_SECONDS,
      async () => {
        let user = await this.UserModel.findById({ _id: id });

        user.isActive = true;

        this.banRemoved = await this.UserModel.findByIdAndUpdate(
          user._id,
          user,
          {
            new: true,
          }
        );
      }
    );

    this.scheduler.addCronJob(`ban ${user._id}`, job as any);
    job.start();

    setTimeout(() => {
      job.stop();
      console.log("Stop job");
    }, 10100);

    return this.banRemoved;
  }
}
