"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = exports.typeormConfig = void 0;
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
var typeorm_1 = require("typeorm");
require("reflect-metadata");
var _a = process.env, TYPEORM_HOST = _a.TYPEORM_HOST, TYPEORM_PORT = _a.TYPEORM_PORT, TYPEORM_PASSWORD = _a.TYPEORM_PASSWORD, TYPEORM_USERNAME = _a.TYPEORM_USERNAME, TYPEORM_DATABASE = _a.TYPEORM_DATABASE, CA_CERT = _a.CA_CERT;
exports.typeormConfig = {
    type: 'postgres',
    host: TYPEORM_HOST,
    port: +TYPEORM_PORT,
    username: TYPEORM_USERNAME,
    password: TYPEORM_PASSWORD,
    database: TYPEORM_DATABASE,
    entities: ['dist/database/entities/*.entity.js'],
    migrations: [
        'dist/database/migrations/*.js',
        'dist/database/migrations/seeds/*.js',
    ],
    ssl: {
        ca: CA_CERT,
        rejectUnauthorized: false,
    },
};
exports.AppDataSource = new typeorm_1.DataSource(__assign({}, exports.typeormConfig));
