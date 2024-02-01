import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { productValidations } from "./product.validation";
import { ProductController } from "./product.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";

const router = express.Router();

router.post(
  "/create-product",auth(USER_ROLE.user) ,
  validateRequest(productValidations.createProductValidation),
  ProductController.CreateProduct
);
router.get("/",auth(USER_ROLE.user) ,ProductController.getAllProducts);
router.get("/:id",auth(USER_ROLE.user) , ProductController.getSingleProduct);
router.delete('/delete-product/:id',auth(USER_ROLE.user) , ProductController.deleteProduct);
router.delete('/delete-products',auth(USER_ROLE.user) , ProductController.deleteProducts);
router.patch(
    '/update-product/:id',auth(USER_ROLE.user) ,
    validateRequest(productValidations.updateProductValidation),
    ProductController.updateProduct,
  );

export const ProductRoutes = router;
