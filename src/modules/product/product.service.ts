import AppError from "../../errors/AppError";
import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductIntoDb = async (payload: TProduct) => {
  if (await ProductModel.isProductexists(payload.productSimpleId)) {
    throw new AppError(400, "Product already exists with this id");
  }

  const result = await ProductModel.create(payload);

  return result;
};

export const ProductService = { createProductIntoDb };
