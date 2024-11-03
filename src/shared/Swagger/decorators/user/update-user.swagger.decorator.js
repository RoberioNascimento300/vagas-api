"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerUpdateUser = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var bad_request_swagger_1 = require("../../bad-request.swagger");
var unauthorized_swagger_1 = require("../../unauthorized.swagger");
function SwaggerUpdateUser() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiBody)({
        description: 'Upload images',
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Exemplo do retorno de sucesso da rota',
        type: bad_request_swagger_1.BadRequestSwagger,
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        description: 'Modelo de erro',
        type: unauthorized_swagger_1.UnauthorizedSwagger,
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Modelo de erro',
        type: bad_request_swagger_1.BadRequestSwagger,
    }), (0, swagger_1.ApiOperation)({
        summary: 'Atualizar um usuário pelo ID',
    }));
}
exports.SwaggerUpdateUser = SwaggerUpdateUser;
