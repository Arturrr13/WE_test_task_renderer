"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController = __importStar(require("./auth/auth.controller"));
const formController = __importStar(require("./form/form.controller"));
const admin_1 = require("../middleware/admin");
const router = (0, express_1.Router)();
const authRouter = (0, express_1.Router)();
const tryFunc = async (func, res, next) => {
    try {
        func;
    }
    catch (error) {
        next(error);
    }
};
router.post('/form', async (req, res, next) => tryFunc(await formController.createUser(req, res, next), res, next));
router.get('/form', async (req, res, next) => tryFunc(await formController.getAllUsers(req, res, next), res, next));
router.get('/form/:id', async (req, res, next) => tryFunc(await formController.getUser(req, res, next), res, next));
router.put('/form/:id', async (req, res, next) => tryFunc(await formController.changeUserData(req, res, next), res, next));
router.delete('/form/:id', async (req, res, next) => tryFunc(await formController.deleteUser(req, res, next), res, next));
authRouter.post('/login', admin_1.adminMiddleware, async (req, res, next) => await authController.logIn(req, res, next));
//authRouter.post('/signup', async (req: Request, res: Response, next) => await authController.signUp(req, res, next))
router.use('/auth', authRouter);
exports.default = router;
