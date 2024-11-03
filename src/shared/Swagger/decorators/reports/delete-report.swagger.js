"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteReportSwagger = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
function DeleteReportSwagger() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({
        summary: 'Excluir um relatório por id.',
    }));
}
exports.DeleteReportSwagger = DeleteReportSwagger;
