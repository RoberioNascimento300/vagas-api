"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCommentarySwagger = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
function DeleteCommentarySwagger() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({
        summary: 'Excluir um comentário por id.',
    }));
}
exports.DeleteCommentarySwagger = DeleteCommentarySwagger;
