"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var common_1 = require("@nestjs/common");
var passport_1 = require("@nestjs/passport");
var platform_express_1 = require("@nestjs/platform-express");
var swagger_1 = require("@nestjs/swagger");
var create_user_swagger_decorator_1 = require("../../../../../../../../../src/shared/Swagger/decorators/user/create-user.swagger.decorator");
var delete_user_swagger_decorator_1 = require("../../../../../../../../../src/shared/Swagger/decorators/user/delete-user.swagger.decorator");
var get_user_adm_swagger_decorator_1 = require("../../../../../../../../../src/shared/Swagger/decorators/user/get-user-adm.swagger.decorator");
var get_user_swagger_decorator_1 = require("../../../../../../../../../src/shared/Swagger/decorators/user/get-user.swagger.decorator");
var recover_by_email_swagger_decorator_1 = require("../../../../../../../../../src/shared/Swagger/decorators/user/recover-by-email.swagger.decorator");
var update_pass_after_email_recovery_swagger_decorator_1 = require("../../../../../../../../../src/shared/Swagger/decorators/user/update-pass-after-email-recovery.swagger.decorator");
var update_password_swagger_decorator_1 = require("../../../../../../../../../src/shared/Swagger/decorators/user/update-password.swagger.decorator");
var update_user_swagger_decorator_1 = require("../../../../../../../../../src/shared/Swagger/decorators/user/update-user.swagger.decorator");
var view_users_swagger_decorator_1 = require("../../../../../../../../../src/shared/Swagger/decorators/user/view-users.swagger.decorator");
var UserController = function () {
    var _classDecorators = [(0, swagger_1.ApiTags)('User'), (0, common_1.Controller)('user')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _createNewUser_decorators;
    var _activateUser_decorators;
    var _getAllUsers_decorators;
    var _getOneUser_decorators;
    var _updateUser_decorators;
    var _deleteUser_decorators;
    var _recoveryPasswordSendEmail_decorators;
    var _updatePasswordAfterEmail_decorators;
    var _updatePassword_decorators;
    var UserController = _classThis = /** @class */ (function () {
        function UserController_1(createUserService, findOneUserService, findAllUsersService, updateUserService, deleteUserService, recoveryPasswordByEmail, updatePasswordByEmailService, updatePasswordService, activateUserService) {
            this.createUserService = (__runInitializers(this, _instanceExtraInitializers), createUserService);
            this.findOneUserService = findOneUserService;
            this.findAllUsersService = findAllUsersService;
            this.updateUserService = updateUserService;
            this.deleteUserService = deleteUserService;
            this.recoveryPasswordByEmail = recoveryPasswordByEmail;
            this.updatePasswordByEmailService = updatePasswordByEmailService;
            this.updatePasswordService = updatePasswordService;
            this.activateUserService = activateUserService;
        }
        UserController_1.prototype.createNewUser = function (createUser, res, req) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, status;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.createUserService.execute(createUser, req)];
                        case 1:
                            _a = _b.sent(), data = _a.data, status = _a.status;
                            return [2 /*return*/, res.status(status).send(data)];
                    }
                });
            });
        };
        UserController_1.prototype.activateUser = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.activateUserService.execute(id)];
                });
            });
        };
        UserController_1.prototype.getAllUsers = function (user, pageOptionsDto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.findAllUsersService.execute(pageOptionsDto)];
                });
            });
        };
        UserController_1.prototype.getOneUser = function (id, user) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.findOneUserService.execute(id)];
                });
            });
        };
        UserController_1.prototype.updateUser = function (user, data, file) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.updateUserService.execute(user, data, file)];
                });
            });
        };
        UserController_1.prototype.deleteUser = function (user) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.deleteUserService.execute(user.id)];
                });
            });
        };
        UserController_1.prototype.recoveryPasswordSendEmail = function (_a, res) {
            var email = _a.email;
            return __awaiter(this, void 0, void 0, function () {
                var _b, status, data;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, this.recoveryPasswordByEmail.execute(email)];
                        case 1:
                            _b = _c.sent(), status = _b.status, data = _b.data;
                            return [2 /*return*/, res.status(status).send(data)];
                    }
                });
            });
        };
        UserController_1.prototype.updatePasswordAfterEmail = function (updatePassword, res) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, status;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.updatePasswordByEmailService.execute(updatePassword)];
                        case 1:
                            _a = _b.sent(), data = _a.data, status = _a.status;
                            return [2 /*return*/, res.status(status).send(data)];
                    }
                });
            });
        };
        UserController_1.prototype.updatePassword = function (user, passData, res) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, status;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.updatePasswordService.execute(user, passData)];
                        case 1:
                            _a = _b.sent(), data = _a.data, status = _a.status;
                            return [2 /*return*/, res.status(status).send(data)];
                    }
                });
            });
        };
        return UserController_1;
    }());
    __setFunctionName(_classThis, "UserController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _createNewUser_decorators = [(0, common_1.Post)(), (0, create_user_swagger_decorator_1.SwaggerCreateUser)()];
        _activateUser_decorators = [(0, common_1.Put)('activate/:id'), (0, get_user_swagger_decorator_1.SwaggerGetUser)()];
        _getAllUsers_decorators = [(0, common_1.Get)(), (0, view_users_swagger_decorator_1.SwaggerFindUsers)(), (0, common_1.UseGuards)((0, passport_1.AuthGuard)()), (0, swagger_1.ApiBearerAuth)()];
        _getOneUser_decorators = [(0, common_1.Get)(':id'), (0, get_user_adm_swagger_decorator_1.SwaggerGetUserAdm)(), (0, common_1.UseGuards)((0, passport_1.AuthGuard)()), (0, swagger_1.ApiBearerAuth)()];
        _updateUser_decorators = [(0, common_1.Put)(), (0, swagger_1.ApiBearerAuth)(), (0, common_1.UseGuards)((0, passport_1.AuthGuard)()), (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')), (0, update_user_swagger_decorator_1.SwaggerUpdateUser)()];
        _deleteUser_decorators = [(0, common_1.Delete)(), (0, delete_user_swagger_decorator_1.SwaggerDeleteUser)(), (0, common_1.UseGuards)((0, passport_1.AuthGuard)()), (0, swagger_1.ApiBearerAuth)()];
        _recoveryPasswordSendEmail_decorators = [(0, common_1.Patch)('recovery_password'), (0, recover_by_email_swagger_decorator_1.SwaggerRecoverEmail)()];
        _updatePasswordAfterEmail_decorators = [(0, common_1.Patch)('update_password_email'), (0, update_pass_after_email_recovery_swagger_decorator_1.SwaggerUpdatePassAfterRecovery)()];
        _updatePassword_decorators = [(0, common_1.Patch)('update_password'), (0, common_1.UseGuards)((0, passport_1.AuthGuard)()), (0, swagger_1.ApiBearerAuth)(), (0, update_password_swagger_decorator_1.SwaggerUpdatePassword)()];
        __esDecorate(_classThis, null, _createNewUser_decorators, { kind: "method", name: "createNewUser", static: false, private: false, access: { has: function (obj) { return "createNewUser" in obj; }, get: function (obj) { return obj.createNewUser; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _activateUser_decorators, { kind: "method", name: "activateUser", static: false, private: false, access: { has: function (obj) { return "activateUser" in obj; }, get: function (obj) { return obj.activateUser; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getAllUsers_decorators, { kind: "method", name: "getAllUsers", static: false, private: false, access: { has: function (obj) { return "getAllUsers" in obj; }, get: function (obj) { return obj.getAllUsers; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getOneUser_decorators, { kind: "method", name: "getOneUser", static: false, private: false, access: { has: function (obj) { return "getOneUser" in obj; }, get: function (obj) { return obj.getOneUser; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateUser_decorators, { kind: "method", name: "updateUser", static: false, private: false, access: { has: function (obj) { return "updateUser" in obj; }, get: function (obj) { return obj.updateUser; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deleteUser_decorators, { kind: "method", name: "deleteUser", static: false, private: false, access: { has: function (obj) { return "deleteUser" in obj; }, get: function (obj) { return obj.deleteUser; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _recoveryPasswordSendEmail_decorators, { kind: "method", name: "recoveryPasswordSendEmail", static: false, private: false, access: { has: function (obj) { return "recoveryPasswordSendEmail" in obj; }, get: function (obj) { return obj.recoveryPasswordSendEmail; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updatePasswordAfterEmail_decorators, { kind: "method", name: "updatePasswordAfterEmail", static: false, private: false, access: { has: function (obj) { return "updatePasswordAfterEmail" in obj; }, get: function (obj) { return obj.updatePasswordAfterEmail; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updatePassword_decorators, { kind: "method", name: "updatePassword", static: false, private: false, access: { has: function (obj) { return "updatePassword" in obj; }, get: function (obj) { return obj.updatePassword; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UserController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UserController = _classThis;
}();
exports.UserController = UserController;
