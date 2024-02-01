

import httpStatus from "http-status"
import {  SaleService } from "./sale.service"
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"

const CreateSale = catchAsync(async (req,res)=> {
    const sale = req.body
    const result = await SaleService.createSaleIntoDb(sale)
sendResponse(res,{
statusCode : httpStatus.OK,
success: true,
message: "Sale order created Successfully",
data : result
})    
    })
const getAllSaleHistory = catchAsync(async(req,res)=>{
    const result = await SaleService.getAllSaleHistoryFromDb()
    sendResponse(res,{
        statusCode : httpStatus.OK,
        success: true,
        message: "Sale order history retrieved Successfully",
        data : result
        })  
})



export const SaleController = {CreateSale,getAllSaleHistory}