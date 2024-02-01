import httpStatus from "http-status";
import QueryBuilder from "../../builder/QueryBuilder";
import AppError from "../../errors/AppError";
import { TSale } from "./sale.interface";
import { SaleModel } from "./sale.model";
import { ProductModel } from "../product/product.model";
import { TProduct } from "../product/product.interface";

const createSaleIntoDb = async (payload: TSale) => {

  
let result
  const checkStock = await ProductModel.findById(payload.productId)
  if(checkStock!.productQuantity >= payload.saleQuantity){

    result = await SaleModel.create(payload)
   const newStock =  checkStock!.productQuantity - payload.saleQuantity
    const productQuantityupdate = await ProductModel.findByIdAndUpdate( payload.productId,
      { $set: { productQuantity: newStock,
        isDeleted: newStock === 0 } },
      { new: true } )
  }else {
    throw new AppError(httpStatus.BAD_REQUEST, "Stock is not available");

  }


  return result;
};

const getAllSaleHistoryFromDb =async ()=>{

const result = await SaleModel.find().populate("productId")
return result
}


export const SaleService = {
  createSaleIntoDb,getAllSaleHistoryFromDb
};
