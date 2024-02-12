import express from "express";
import {registerController, loginController, testController, forgotPasswordController} from '../controllers/AuthController.js'
import { isAdmin, requireSignIn } from "../middlewares/AuthMiddleware.js";

//router object
const router = express.Router()

//routing
// REGISTER || METHOD POST
router.post('/register', registerController)

// LOGIN || POST
router.post('/login', loginController)

// Forgot Password
router.post('/forgot-password', forgotPasswordController)

//test routes
router.get('/test', requireSignIn, isAdmin, testController);

//Protected Route
router.get("/user-auth", requireSignIn, (req, res) => {
   res.status(200).send({ok: true});
});

//Admin Route
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
   res.status(200).send({ok: true});
});

export default router;