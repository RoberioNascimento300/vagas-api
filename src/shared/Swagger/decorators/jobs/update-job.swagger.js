"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateJobSwagger = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
function UpdateJobSwagger() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({
        summary: 'Atualizar uma vaga pelo id.',
    }));
}
exports.UpdateJobSwagger = UpdateJobSwagger;
