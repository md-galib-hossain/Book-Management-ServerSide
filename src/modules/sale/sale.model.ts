import { Schema, model } from "mongoose";
import { TSale, TSaleModel } from "./sale.interface";
import { ProductModel } from "../product/product.model";

const SaleSchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: "product",
    },
    saleQuantity: {
      type: Number,
      required: true,
    },
    saleDate: {
      type: String,
      required: true,
    },
    buyerName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);





//check with objectId
SaleSchema.statics.isProductexist = async function (id: string) {
  const existingProduct = await ProductModel.findOne({ _id: id });
  return existingProduct;
};



export const SaleModel = model<TSale, TSaleModel>("sale", SaleSchema);
