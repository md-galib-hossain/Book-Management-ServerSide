import QueryBuilder from "../../builder/QueryBuilder";
import AppError from "../../errors/AppError";
import { ProductSearchableFields } from "./product.constant";
import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductIntoDb = async (payload: TProduct) => {
  if (await ProductModel.isProductexists(payload.productSimpleId)) {
    throw new AppError(400, "Product already exists with this id");
  }

  const result = await ProductModel.create(payload);

  return result;
};

//get all products
const getAllProductsFromDB = async (query: Record<string, unknown>) => {
    const productQuery = new QueryBuilder(
      ProductModel.find(),
      query,
    )
      .search(ProductSearchableFields)
      .filter()
      .sort()
      .paginate()
      .fields();
  
    const result = await productQuery.modelQuery;
    const meta = await productQuery.countTotal();
  
    return {
      meta,
      result,
    };
  };

  //get single product
  const getSingleProductFromDB = async (id: string) => {
    const result = await ProductModel.findById(id)  //_id
    return result;
  };



export const ProductService = { createProductIntoDb,getAllProductsFromDB,getSingleProductFromDB };
