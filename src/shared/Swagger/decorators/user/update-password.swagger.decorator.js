"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerUpdatePassword = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var bad_request_swagger_1 = require("../../bad-request.swagger");
var not_found_swagger_1 = require("../../not-found.swagger");
var unauthorized_swagger_1 = require("../../unauthorized.swagger");
function SwaggerUpdatePassword() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Exemplo do retorno de sucesso da rota',
        type: not_found_swagger_1.NotFoundSwagger,
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        description: 'Modelo de erro',
        type: unauthorized_swagger_1.UnauthorizedSwagger,
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Modelo de erro',
        type: bad_request_swagger_1.BadRequestSwagger,
    }), (0, swagger_1.ApiOperation)({
        summary: 'User update password without recovery e-mail.',
    }));
}
exports.SwaggerUpdatePassword = SwaggerUpdatePassword;
