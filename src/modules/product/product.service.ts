import httpStatus from "http-status";
import QueryBuilder from "../../builder/QueryBuilder";
import AppError from "../../errors/AppError";
import { ProductSearchableFields } from "./product.constant";
import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductIntoDb = async (payload: TProduct) => {
  if (await ProductModel.isProductexistswithsimpleid(payload.productSimpleId)) {
    throw new AppError(400, "Product already exists with this id");
  }

  const result = await ProductModel.create(payload);

  return result;
};

//get all products
const getAllProductsFromDB = async (query: Record<string, unknown>) => {
  const productQuery = new QueryBuilder(ProductModel.find(), query)
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
  const result = await ProductModel.findOne({productSimpleId: id}); //product simple id
  return result;
};

//delete single product
const deleteProductFromDB = async (id: string) => {
  if (!(await ProductModel.isProductexist(id))) {
    throw new AppError(400, "This product do not exist");
  }
  if (await ProductModel.isProductdeleted(id)) {
    throw new AppError(400, "This product is already deleted");
  }
  const result = await ProductModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    {
      new: true,
    }
  );
  return result;
};

//delete many multiple products
const deleteProductsFromDB = async (ids: string[]) => {
  const result = await ProductModel.updateMany(
    { _id: { $in: ids } },
    { $set: { isDeleted: true } }
  );
  return result;
};

//update product
const updateProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
  const { language, bookFormat, ...productRemainingData } = payload;

  try {
    
    const updatedBasicProductInfo = await ProductModel.findByIdAndUpdate(
      id,
      productRemainingData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedBasicProductInfo) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to update Product");
    }

    // check if there is any language to update
    if (language && language.length > 0) {
      const newLanguage = await ProductModel.findByIdAndUpdate(
        id,
        {
          $set: { language:  language  },
        },
        {
          new: true,
          runValidators: true,
        }
      );

      if (!newLanguage) {
        throw new AppError(httpStatus.BAD_REQUEST, "Failed to update product");
      }
    }

    // check if there is any bookFormat to update
    if (bookFormat && bookFormat.length > 0) {
        const newBookFormat = await ProductModel.findByIdAndUpdate(
          id,
          {
            $set: {bookFormat:bookFormat },
          },
          {
            new: true,
            runValidators: true,
          }
        );
  
        if (!newBookFormat) {
          throw new AppError(httpStatus.BAD_REQUEST, "Failed to update product");
        }
      }

    const result = await ProductModel.findById(id)

    return result;
  } catch (err) {
    console.log(err);

    throw new AppError(httpStatus.BAD_REQUEST, "Failed to update Product");
  }
};

export const ProductService = {
  createProductIntoDb,
  getAllProductsFromDB,
  getSingleProductFromDB,
  deleteProductFromDB,
  deleteProductsFromDB,
  updateProductIntoDB
};
