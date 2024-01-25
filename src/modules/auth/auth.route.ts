import express from 'express';
import { AuthValidation } from './auth.validation';
import { AuthControllers } from './auth.controller';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();
router.post(
    '/auth/login',
    validateRequest(AuthValidation.loginValidationSchema),
    AuthControllers.loginUser,
  );
router.post(
    '/auth/change-password',
    validateRequest(AuthValidation.changePasswordValidationSchema),
    AuthControllers.changePassword,
  );
  export const AuthRoutes = router;
