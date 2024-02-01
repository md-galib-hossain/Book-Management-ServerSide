import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import {  saleValidations } from "./sale.validation";
import {  SaleController } from "./sale.controller";
import { USER_ROLE } from "../user/user.constant";
import auth from "../../middlewares/auth";

const router = express.Router();

router.post(
  "/create-sale",auth(USER_ROLE.user) ,
  validateRequest(saleValidations.createSaleValidation),
  SaleController.CreateSale
);
router.get(
  "/sale-history",auth(USER_ROLE.user) ,
  SaleController.getAllSaleHistory
);


export const SaleRoutes = router;
