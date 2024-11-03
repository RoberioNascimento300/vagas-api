"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLoggedSwagger = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var logged_user_types_1 = require("../../../../../../../../../../../src/modules/auth/types/logged-user.types");
var unauthorized_swagger_1 = require("../../unauthorized.swagger");
function UserLoggedSwagger() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Exemplo do retorno de sucesso da rota',
        type: logged_user_types_1.LoggerUserType,
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        description: 'Modelo de erro',
        type: unauthorized_swagger_1.UnauthorizedSwagger,
    }), (0, swagger_1.ApiOperation)({
        summary: 'Retorna usuário logado',
    }));
}
exports.UserLoggedSwagger = UserLoggedSwagger;
