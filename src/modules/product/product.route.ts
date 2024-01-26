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

export const ProductRoutes = router;
