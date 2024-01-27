import { z } from "zod";

const createSaleValidation = z.object({
    body:z.object({
        productId: z.string(),
          saleQuantity: z.number(),
          saleDate: z.string(),
          buyerName: z.string(),
    })
})

export const saleValidations = {createSaleValidation}