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
exports.deleteUser = exports.changeUserData = exports.getUser = exports.getAllUsers = exports.createUser = void 0;
const service = __importStar(require("./form.service"));
const createUser = async (req, res, next) => {
    try {
        const { fName, lName, data, email, phone, image } = req.body;
        const result = await service.createUser(fName, lName, data, email, phone, image);
        if (result)
            res.send(result);
    }
    catch (e) {
        next(e);
    }
};
exports.createUser = createUser;
const getAllUsers = async (req, res, next) => {
    try {
        // @ts-ignore
        const result = await service.getAllUsers();
        const checkUsers = result.filter(el => !el.adminstatus);
        if (result)
            res.json(checkUsers);
    }
    catch (e) {
        next(e);
    }
};
exports.getAllUsers = getAllUsers;
const getUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await service.getUser(id);
        if (result)
            res.json(result);
    }
    catch (e) {
        next(e);
    }
};
exports.getUser = getUser;
const changeUserData = async (req, res, next) => {
    try {
        const { fName, lName, data, email, phone, image } = req.body;
        const id = req.params.id;
        const result = await service.changeUserData(id, fName, lName, data, email, phone, image);
        if (result)
            res.send(result);
    }
    catch (e) {
        next(e);
    }
};
exports.changeUserData = changeUserData;
const deleteUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await service.deleteUser(id);
        if (result)
            res.send({ message: 'User was deleted' });
    }
    catch (e) {
        next(e);
    }
};
exports.deleteUser = deleteUser;
