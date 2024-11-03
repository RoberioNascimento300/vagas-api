"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNewJobSwagger = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var unauthorized_swagger_1 = require("../../unauthorized.swagger");
var bad_request_swagger_1 = require("../../bad-request.swagger");
function CreateNewJobSwagger() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'Exemplo do retorno de sucesso da rota',
        type: 'Vaga publicada com sucesso',
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        description: 'Modelo de erro',
        type: unauthorized_swagger_1.UnauthorizedSwagger,
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Modelo de erro',
        type: bad_request_swagger_1.BadRequestSwagger,
    }), (0, swagger_1.ApiOperation)({
        summary: 'Criar uma vaga!',
    }), (0, swagger_1.ApiOperation)({
        summary: 'Buscar todas as vagas.',
    }));
}
exports.CreateNewJobSwagger = CreateNewJobSwagger;
