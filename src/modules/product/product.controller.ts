

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

      //get single product
      const getSingleProduct = catchAsync(async (req, res) => {
        const { id } = req.params;
        const result = await ProductService.getSingleProductFromDB(id);
      
        sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: 'Product is retrieved succesfully',
          data: result,
        });
      });

      //delete product
      const deleteProduct = catchAsync(async (req, res) => {
        const { id } = req.params;
        const result = await ProductService.deleteProductFromDB(id);
      
        sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: 'Product is deleted succesfully',
          data: result,
        });
      });
      //delete multiple products
      const deleteProducts = catchAsync(async (req, res) => {
        const {ids} = req.body
        console.log(ids)
        const result = await ProductService.deleteProductsFromDB(ids);
      
        sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: 'Products are deleted succesfully',
          data: result,
        });
      });

      //update product
      const updateProduct = catchAsync(async (req, res) => {
        const { id } = req.params;
        const result = await ProductService.updateProductIntoDB(id, req.body);
      
        sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: 'Product is updated succesfully',
          data: result,
        });
      });

export const ProductController = {CreateProduct,getAllProducts,getSingleProduct,deleteProduct,deleteProducts,updateProduct}