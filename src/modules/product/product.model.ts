import { Schema, model } from "mongoose";
import { TProduct, TProductModel } from "./product.interface";

const ProductSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
    productSimpleId: {
      type: String,
      required: true,
    },
    productQuantity: {
      type: Number,
      required: true,
    },
    releaseDate: {
      type: Date,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    isbn: {
      type: Number,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
    },
    series: {
      type: String,
      required: true,
    },
    language: {
      type: [String],
      required: true,
    },
    bookFormat: {
      type: [String],
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false, // Assuming default value is false, change as needed
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);

ProductSchema.statics.isProductexists = async function (productSimpleId: string) {
  const existingProduct = await ProductModel.findOne({productSimpleId : productSimpleId})
  return existingProduct
}

export const ProductModel = model<TProduct, TProductModel>(
  "product",
  ProductSchema
);
