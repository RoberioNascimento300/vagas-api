"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCompanySwagger = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var create_company_dto_1 = require("../../../../../../../../../../../src/modules/company/dtos/create-company.dto");
var unauthorized_swagger_1 = require("../../unauthorized.swagger");
var bad_request_swagger_1 = require("../../bad-request.swagger");
function CreateCompanySwagger() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Exemplo do retorno de sucesso da rota',
        type: create_company_dto_1.CreateCompanyDto,
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        description: 'Modelo de erro',
        type: unauthorized_swagger_1.UnauthorizedSwagger,
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Modelo de erro',
        type: bad_request_swagger_1.BadRequestSwagger,
    }), (0, swagger_1.ApiOperation)({
        summary: 'Cadastrar uma empresa.',
    }));
}
exports.CreateCompanySwagger = CreateCompanySwagger;
