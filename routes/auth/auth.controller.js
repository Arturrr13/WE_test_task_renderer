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
exports.logIn = void 0;
const service = __importStar(require("./auth.service"));
const logIn = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const result = await service.logInUser(email, password);
        if (result)
            res.status(200).send(result);
    }
    catch (e) {
        next(e);
    }
};
exports.logIn = logIn;
// export const signUp = async (req: Request, res: Response, next: NextFunction) => {
//     try{
//         const result: Array<LoginRes> | undefined = await service.signUpAdmin('Admin', 'Admin', '28/11/2024', 'admin@admin.com', 'admin123')
//         if(result) res.status(200).send(result)
//     } catch(e){
//         next(e)
//     }
// }
