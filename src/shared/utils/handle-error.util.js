"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
var common_1 = require("@nestjs/common");
var handleError = function (error) {
    var _a, _b;
    var errorLines = (_a = error.message) === null || _a === void 0 ? void 0 : _a.split('\n');
    var lastErrorLine = (_b = errorLines[errorLines.length - 1]) === null || _b === void 0 ? void 0 : _b.trim();
    if (!lastErrorLine) {
        console.error(error);
    }
    throw new common_1.UnprocessableEntityException(lastErrorLine || 'An error occurred while performing the operation.');
};
exports.handleError = handleError;
