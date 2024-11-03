"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivateCompanySwagger = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var unauthorized_swagger_1 = require("../../unauthorized.swagger");
var bad_request_swagger_1 = require("../../bad-request.swagger");
function ActivateCompanySwagger() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        description: 'Modelo de erro',
        type: unauthorized_swagger_1.UnauthorizedSwagger,
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Modelo de erro',
        type: bad_request_swagger_1.BadRequestSwagger,
    }), (0, swagger_1.ApiOperation)({
        summary: 'Ativar uma empresa pelo ID',
    }));
}
exports.ActivateCompanySwagger = ActivateCompanySwagger;