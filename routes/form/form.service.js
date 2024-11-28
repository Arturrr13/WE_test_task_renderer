"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.changeUserData = exports.getUser = exports.getAllUsers = exports.createUser = void 0;
const sequelize_1 = require("../../sequelize/sequelize");
const errors_1 = require("../../errors/errors");
const createUser = async (fName, lName, date, email, phone, image) => {
    let checkUser = await sequelize_1.sequelize.sync().then(async () => await sequelize_1.User.findOne({ where: { email: email } })).catch((error) => { throw [(0, errors_1.getError)('databaseUnable'), error]; });
    if (checkUser && checkUser?.dataValues.password)
        throw (0, errors_1.getError)('userAlreadyExist');
    let user = await sequelize_1.sequelize.sync()
        .then(async () => await sequelize_1.User.create({ firstname: fName, lastname: lName, dateofbirth: date, email: email, phone: phone, logo: image, adminstatus: false }))
        .catch((error) => { throw [(0, errors_1.getError)('databaseUnable'), error]; });
    if (user?.dataValues)
        return [user?.dataValues];
};
exports.createUser = createUser;
const getAllUsers = async () => sequelize_1.sequelize.sync().then(() => sequelize_1.User.findAll()).catch((error) => { throw [(0, errors_1.getError)('databaseUnable'), error]; });
exports.getAllUsers = getAllUsers;
const getUser = async (id) => {
    let user = await sequelize_1.sequelize.sync().then(async () => await sequelize_1.User.findOne({ where: { id: id } })).catch((error) => { throw [(0, errors_1.getError)('databaseUnable'), error]; });
    if (!user)
        throw (0, errors_1.getError)('userNotFound');
    return sequelize_1.User.findOne({ where: { id: id } });
};
exports.getUser = getUser;
const changeUserData = async (id, fName, lName, date, email, phone, image) => {
    let user = await sequelize_1.sequelize.sync().then(async () => await sequelize_1.User.findOne({ where: { id: id } })).catch((error) => { throw [(0, errors_1.getError)('databaseUnable'), error]; });
    if (!user)
        throw (0, errors_1.getError)('userNotFound');
    const checkValue = (value, key) => !value ? user?.dataValues[key] : value;
    return user.update({ firstname: checkValue(fName, 'firstname'), lastname: checkValue(lName, 'lastname'), dateofbirth: checkValue(date, 'dateofbirth'), email: checkValue(email, 'email'), phone: checkValue(phone, 'phone'), logo: checkValue(image, 'logo') });
};
exports.changeUserData = changeUserData;
const deleteUser = async (id) => {
    let user = await sequelize_1.sequelize.sync().then(async () => await sequelize_1.User.findOne({ where: { id: id } })).catch((error) => { throw [(0, errors_1.getError)('databaseUnable'), error]; });
    if (!user)
        throw (0, errors_1.getError)('userNotFound');
    return sequelize_1.User.destroy({ where: { id: id } });
};
exports.deleteUser = deleteUser;
