"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOneJobSwagger = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
function GetOneJobSwagger() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({
        summary: 'Buscar uma vaga pelo id.',
    }));
}
exports.GetOneJobSwagger = GetOneJobSwagger;
