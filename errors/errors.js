"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getError = exports.errors = void 0;
exports.errors = [
    {
        name: 'badRequest',
        status: 400,
        message: 'Bad request'
    },
    {
        name: 'unauthorized',
        status: 401,
        message: 'User unauthorized'
    },
    {
        name: 'wrongPassword',
        status: 401,
        message: 'Wrong password'
    },
    {
        name: 'userNotFound',
        status: 404,
        message: 'User not found'
    },
    {
        name: 'userAlreadyExist',
        status: 409,
        message: 'User already exist'
    },
    {
        name: 'databaseUnable',
        status: 503,
        message: 'Unable to connect to database: '
    }
];
const getError = (err) => exports.errors.find(el => el.name === err);
exports.getError = getError;
