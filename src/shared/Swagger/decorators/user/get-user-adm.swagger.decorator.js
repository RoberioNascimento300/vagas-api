"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerGetUserAdm = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var get_by_params_dto_1 = require("../../../../../../../../../../../src/modules/user/dtos/get-by-params.dto");
var bad_request_swagger_1 = require("../../bad-request.swagger");
var unauthorized_swagger_1 = require("../../unauthorized.swagger");
var create_response_swagger_1 = require("./classes/create-response.swagger");
function SwaggerGetUserAdm() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Exemplo do retorno de sucesso da rota',
        type: create_response_swagger_1.CreateResponseSwagger,
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
        description: 'Modelo de erro',
        type: unauthorized_swagger_1.UnauthorizedSwagger,
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Modelo de erro',
        type: bad_request_swagger_1.BadRequestSwagger,
    }), (0, swagger_1.ApiOperation)({
        summary: 'Visualizar um usuário pelo ID (precisa ser adm)',
    }), (0, swagger_1.ApiParam)({
        type: get_by_params_dto_1.GetByParamsDto,
        name: '',
    }));
}
exports.SwaggerGetUserAdm = SwaggerGetUserAdm;
