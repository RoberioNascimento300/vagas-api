"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggedCompany = void 0;
var common_1 = require("@nestjs/common");
exports.LoggedCompany = (0, common_1.createParamDecorator)(function (_, ctx) {
    var request = ctx.switchToHttp().getRequest();
    var userObject = request.user;
    if (!userObject) {
        throw new common_1.UnauthorizedException('Company does not have permission to access this route');
    }
    return userObject;
});
