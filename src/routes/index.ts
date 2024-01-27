import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { ProductRoutes } from "../modules/product/product.route";
import { SaleRoutes } from "../modules/sale/sale.route";


const router = Router()
const moduleRoutes = [
    {
        path: '/users',
        route : UserRoutes
    },{
        path : '/user',
        route: AuthRoutes
    },
    {
        path: '/products',
        route: ProductRoutes
    },
    {
        path: '/sales',
        route: SaleRoutes
    }
]
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
