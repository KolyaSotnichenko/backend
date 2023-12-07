import { Injectable, NotFoundException } from "@nestjs/common";
import { InvoiceModel } from "./invoice.model";
import { InjectModel } from "nestjs-typegoose";
import { ModelType } from "@typegoose/typegoose/lib/types";
import { CreateInvoiceDto } from "./dto/create-invoice.dto";

@Injectable()
export class InvoiceService {
  constructor(
    @InjectModel(InvoiceModel)
    private readonly InvoiceModel: ModelType<InvoiceModel>
  ) {}

  async create(dto: CreateInvoiceDto) {
    const newInvoice = new this.InvoiceModel(dto);

    const invoice = await newInvoice.save();

    return invoice;
  }

  async byId(_id: string) {
    const invoice = await this.InvoiceModel.findById(_id).populate(
      "user products subscriptions"
    );
    if (!invoice) throw new NotFoundException("Invoice not found!");

    return invoice;
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

    return this.InvoiceModel.find(options)
      .select("-updatedAt -__v")
      .sort({
        createdAt: "desc",
      })
      .populate("user products subscriptions")
      .exec();
  }
}
