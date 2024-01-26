

import httpStatus from "http-status"
import { ProductService } from "./product.service"
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"

const CreateProduct = catchAsync(async (req,res)=> {
    const product = req.body
    const result = await ProductService.createProductIntoDb(product)
sendResponse(res,{
statusCode : httpStatus.OK,
success: true,
message: "Product created Successfully",
data : result
})    
    })

    //get all products
    const getAllProducts = catchAsync(async (req, res) => {
        const result = await ProductService.getAllProductsFromDB(req.query);
      
        sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: 'Products are retrieved successfully',
          data: result,
        });
      });

export const ProductController = {CreateProduct,getAllProducts}