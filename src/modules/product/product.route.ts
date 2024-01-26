import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { productValidations } from "./product.validation";
import { ProductController } from "./product.controller";

const router = express.Router();

router.post(
  "/create-product",
  validateRequest(productValidations.createProductValidation),
  ProductController.CreateProduct
);
router.get("/", ProductController.getAllProducts);
router.get("/:id", ProductController.getSingleProduct);
router.delete('/delete-product/:id', ProductController.deleteProduct);
router.delete('/delete-products', ProductController.deleteProducts);
router.patch(
    '/update-product/:id',
    validateRequest(productValidations.updateProductValidation),
    ProductController.updateProduct,
  );

export const ProductRoutes = router;
