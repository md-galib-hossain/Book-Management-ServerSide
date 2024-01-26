import { Model } from "mongoose";

export type TProduct = {
    productName : string;
    productSimpleId : string;
    productPrice : number;
    productQuantity : number;
    releaseDate : Date;
    author : string;
    isbn : number;
    genre : string;
    publisher : string;
    series : string;
    language : string[];
    bookFormat : string[];
    isDeleted? : boolean

}

export interface TProductModel extends Model<TProduct>{
    isProductexists(productSimpleId:string) : Promise<TProduct> | null
    
}