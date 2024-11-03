"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePasswordSwagger = void 0;
var common_1 = require("@nestjs/common");
var update_my_password_dto_1 = require("../../../../../../../../../../../src/modules/company/dtos/update-my-password.dto");
var unauthorized_swagger_1 = require("../../unauthorized.swagger");
var swagger_1 = require("@nestjs/swagger");
var bad_request_swagger_1 = require("../../bad-request.swagger");
function UpdatePasswordSwagger() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Exemplo do retorno de sucesso da rota',
        type: update_my_password_dto_1.CreatePasswordHashDto,
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        description: 'Modelo de erro',
        type: unauthorized_swagger_1.UnauthorizedSwagger,
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Modelo de erro',
        type: bad_request_swagger_1.BadRequestSwagger,
    }), (0, swagger_1.ApiOperation)({
        summary: 'Company update password without recovery e-mail.',
    }));
}
exports.UpdatePasswordSwagger = UpdatePasswordSwagger;
