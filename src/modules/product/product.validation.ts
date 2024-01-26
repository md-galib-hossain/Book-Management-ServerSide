import { z } from "zod";

const createProductValidation = z.object({
    body:z.object({
        productName: z.string(),
        productSimpleId : z.string(),
        productPrice: z.number(),
        productQuantity: z.number(),
        releaseDate: z.string(),
        author: z.string(),
        isbn: z.number(),
        genre: z.string(),
        publisher: z.string(),
        series: z.string(),
        language: z.array(z.string()),
        bookFormat: z.array(z.string()),
        isDeleted: z.boolean().optional(),
    })
})
export const productValidations = {createProductValidation}