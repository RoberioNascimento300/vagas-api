"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerGetUser = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var bad_request_swagger_1 = require("../../bad-request.swagger");
var unprocessable_entity_swagger_1 = require("../../unprocessable-entity.swagger");
var create_response_swagger_1 = require("./classes/create-response.swagger");
function SwaggerGetUser() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Exemplo do retorno de sucesso da rota',
        type: create_response_swagger_1.CreateResponseSwagger,
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
        description: 'Modelo de erro',
        type: unprocessable_entity_swagger_1.UnprocessableEntitySwagger,
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Modelo de erro',
        type: bad_request_swagger_1.BadRequestSwagger,
    }), (0, swagger_1.ApiOperation)({
        summary: 'Ativar um usuário pelo ID',
    }));
}
exports.SwaggerGetUser = SwaggerGetUser;
