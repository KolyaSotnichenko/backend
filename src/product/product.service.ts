import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ModelType } from "@typegoose/typegoose/lib/types";
import { InjectModel } from "nestjs-typegoose";
import { ProductModel } from "./product.model";

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(ProductModel)
    private readonly ProductModel: ModelType<ProductModel>
  ) {}

  async create(dto: CreateProductDto) {
    const oldProduct = await this.ProductModel.findOne({ title: dto.title });

    if (oldProduct) {
      throw new BadRequestException(
        "Product with this title is already in the system!"
      );
    }

    const newProduct = new this.ProductModel(dto);

    const product = await newProduct.save();

    return product;
  }

  async updateProduct(_id: string, dto: UpdateProductDto) {
    return await this.ProductModel.findByIdAndUpdate(
      _id,
      { $set: dto },
      { new: true }
    );
  }

  async byId(_id: string) {
    const product = await this.ProductModel.findById(_id);
    if (!product) throw new NotFoundException("Product not found!");

    return product;
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

    return this.ProductModel.find(options)
      .select("-updatedAt -__v")
      .sort({
        createdAt: "desc",
      })
      .exec();
  }

  async getCount() {
    return this.ProductModel.find().count().exec();
  }

  async delete(id: string) {
    return this.ProductModel.findByIdAndDelete(id).exec();
  }
}
