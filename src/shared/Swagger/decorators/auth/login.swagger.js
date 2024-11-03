"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginSwagger = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var user_login_response_dto_1 = require("../../../../../../../../../../../src/modules/auth/dtos/user-login-response.dto");
var bad_request_swagger_1 = require("../../bad-request.swagger");
function LoginSwagger() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Exemplo do retorno de sucesso da rota',
        type: user_login_response_dto_1.UserLoginResponseDto,
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Modelo de erro',
        type: bad_request_swagger_1.BadRequestSwagger,
    }), (0, swagger_1.ApiOperation)({
        summary: 'Rota para fazer login na plataforma',
    }));
}
exports.LoginSwagger = LoginSwagger;
