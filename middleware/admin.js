"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminMiddleware = void 0;
const errors_1 = require("../errors/errors");
const adminMiddleware = async (req, res, next) => {
    console.log('admin');
    try {
        const { email, password } = req.body;
        if (email !== 'admin@admin.com' || password !== 'admin123')
            return next((0, errors_1.getError)('unauthorized'));
        next();
    }
    catch (e) {
        console.log('bad req');
        next((0, errors_1.getError)('unauthorized'));
    }
};
exports.adminMiddleware = adminMiddleware;
