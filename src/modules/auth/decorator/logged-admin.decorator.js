"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggedAdmin = void 0;
var common_1 = require("@nestjs/common");
exports.LoggedAdmin = (0, common_1.createParamDecorator)(function (_, ctx) {
    var request = ctx.switchToHttp().getRequest();
    var userObject = request.user;
    if (!userObject) {
        throw new common_1.UnauthorizedException('User does not have permission to access this route');
    }
    return userObject;
});
