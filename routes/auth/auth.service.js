"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logInUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const sequelize_1 = require("../../sequelize/sequelize");
const errors_1 = require("../../errors/errors");
const logInUser = async (email, password) => {
    const user = await sequelize_1.sequelize.sync().then(async () => await sequelize_1.User.findOne({ where: { email: email } })).catch(async (error) => { throw [(0, errors_1.getError)('databaseUnable'), error]; });
    if (!user || !user?.dataValues.adminstatus)
        throw (0, errors_1.getError)('unauthorized');
    if (user?.dataValues) {
        const checkPassword = await bcryptjs_1.default.compare(password, user.dataValues.password);
        if (!checkPassword)
            throw (0, errors_1.getError)('wrongPassword');
        return [user?.dataValues];
    }
};
exports.logInUser = logInUser;
// export const signUpAdmin = async (fName: string, lName: string, date: string, email: string, password: string) => {
//     let checkUser = await sequelize.sync().then(async () => await User.findOne({ where: { email: email } })).catch((error: Error) => { throw [ getError('databaseUnable'), error ]})
//     if(checkUser) throw getError('userAlreadyExist')
//     const userPassword = await bcrypt.hash(password, 8)
//     let user = await sequelize.sync()
//     .then(async () => await User.create({ firstname: fName, lastname: lName, dateofbirth: date, email: email, password: userPassword, adminstatus: true }))
//     .catch((error: Error) => { throw [ getError('databaseUnable'), error ]})
//     if(user?.dataValues){
//         return [ user?.dataValues ]
//     }
// }
