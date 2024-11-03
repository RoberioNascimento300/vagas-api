"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerRecoverEmail = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var bad_request_swagger_1 = require("../../bad-request.swagger");
var unauthorized_swagger_1 = require("../../unauthorized.swagger");
var recovery_password_swagger_1 = require("./classes/recovery-password.swagger");
function SwaggerRecoverEmail() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Exemplo do retorno de sucesso da rota',
        type: recovery_password_swagger_1.RecoveryPasswordSwagger,
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        description: 'Modelo de erro',
        type: unauthorized_swagger_1.UnauthorizedSwagger,
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Modelo de erro',
        type: bad_request_swagger_1.BadRequestSwagger,
    }), (0, swagger_1.ApiOperation)({
        summary: 'Send email to recovery password.',
    }));
}
exports.SwaggerRecoverEmail = SwaggerRecoverEmail;
