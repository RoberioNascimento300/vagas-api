"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerHealthCheck = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var health_check_response_swagger_1 = require("./classes/health-check-response.swagger");
function SwaggerHealthCheck() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Exemplo do retorno de sucesso da rota',
        type: health_check_response_swagger_1.HealthCheckResponse,
    }), (0, swagger_1.ApiOperation)({
        summary: 'Retorna status dos serviços de email e banco de dados',
    }));
}
exports.SwaggerHealthCheck = SwaggerHealthCheck;
