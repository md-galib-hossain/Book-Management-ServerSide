import express from 'express'
import { UserController } from './user.controller'

const router = express.Router()

router.post('/create-user',UserController.CreateUser)
router.get('/create-user',)


export const UserRoutes = router 