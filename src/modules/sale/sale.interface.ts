import { Model } from "mongoose";
import { TProduct } from "../product/product.interface";

export type TSale = {
    productId : string;
    saleQuantity : number;
    saleDate : string;
    buyerName : string

}

export interface TSaleModel extends Model<TSale>{
    isProductexist(id:string) : Promise<TProduct> | null
    
}