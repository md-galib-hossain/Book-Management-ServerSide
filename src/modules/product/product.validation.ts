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
const updateProductValidation = z.object({
    body:z.object({
        productName: z.string().optional(),
        productSimpleId : z.string().optional(),
        productPrice: z.number().optional(),
        productQuantity: z.number().optional(),
        releaseDate: z.string().optional(),
        author: z.string().optional(),
        isbn: z.number().optional(),
        genre: z.string().optional(),
        publisher: z.string().optional(),
        series: z.string().optional(),
        language: z.array(z.string()).optional(),
        bookFormat: z.array(z.string()).optional(),
        isDeleted: z.boolean().optional(),
    })
})
export const productValidations = {createProductValidation,updateProductValidation}