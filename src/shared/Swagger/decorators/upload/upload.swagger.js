"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadSwagger = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
function UploadSwagger() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiProperty)(), (0, swagger_1.ApiConsumes)('multipart/form-data'), (0, swagger_1.ApiBody)({
        description: 'Upload images',
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    }));
}
exports.UploadSwagger = UploadSwagger;
