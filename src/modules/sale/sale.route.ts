import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import {  saleValidations } from "./sale.validation";
import {  SaleController } from "./sale.controller";

const router = express.Router();

router.post(
  "/create-sale",
  validateRequest(saleValidations.createSaleValidation),
  SaleController.CreateSale
);


export const SaleRoutes = router;
