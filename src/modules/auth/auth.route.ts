import express from 'express';
import { AuthValidation } from './auth.validation';
import { AuthControllers } from './auth.controller';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();
router.post(
    '/auth/login',
    validateRequest(AuthValidation.loginValidationSchema),
    AuthControllers.loginUser,
  );
router.post(
    '/auth/change-password',
    auth(USER_ROLE.user),
    validateRequest(AuthValidation.changePasswordValidationSchema),
    AuthControllers.changePassword,
  );
  export const AuthRoutes = router;
