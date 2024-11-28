"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize('postgresql://testfl_user:jaQoVLlTDKfO2ubHsosHDhtvUlRCooBv@dpg-csli81jtq21c73ej4pj0-a.oregon-postgres.render.com/testfl?ssl=true', {
    dialect: "postgres",
    logging: false,
});
exports.User = exports.sequelize.define("users", {
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        unique: true,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    firstname: {
        type: sequelize_1.DataTypes.STRING
    },
    lastname: {
        type: sequelize_1.DataTypes.STRING
    },
    dateofbirth: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: sequelize_1.DataTypes.STRING
    },
    logo: {
        type: sequelize_1.DataTypes.STRING
    },
    password: {
        type: sequelize_1.DataTypes.STRING
    },
    adminstatus: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    },
    tstz: {
        type: sequelize_1.DataTypes.TIME
    }
}, { timestamps: false, tableName: 'users' });
