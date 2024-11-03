"use strict";
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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePasswordHashDto = exports.UpdateMyPasswordDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var UpdateMyPasswordDto = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _oldPassword_decorators;
    var _oldPassword_initializers = [];
    var _password_decorators;
    var _password_initializers = [];
    var _confirmNewPassword_decorators;
    var _confirmNewPassword_initializers = [];
    return _a = /** @class */ (function () {
            function UpdateMyPasswordDto() {
                this.oldPassword = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _oldPassword_initializers, void 0));
                this.password = __runInitializers(this, _password_initializers, void 0);
                this.confirmNewPassword = __runInitializers(this, _confirmNewPassword_initializers, void 0);
            }
            return UpdateMyPasswordDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _oldPassword_decorators = [(0, class_validator_1.IsString)({ message: "O campo 'oldPassword' não pode ficar vazio" }), (0, class_validator_1.IsNotEmpty)(), (0, swagger_1.ApiProperty)({
                    description: 'Senha antiga',
                    example: 'Abcd@1234',
                })];
            _password_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)({ message: "O campo 'password' não pode ficar vazio" }), (0, class_validator_1.Length)(8, 50), (0, class_validator_1.Matches)(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
                    message: 'A senha precisa ter no mínimo 8 caracteres, máximo de 50, uma letra maiúscula, um número e um símbolo.',
                }), (0, swagger_1.ApiProperty)({
                    description: 'Senha de Login',
                    example: 'Abcd@1234',
                })];
            _confirmNewPassword_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)({ message: "O campo 'confirmPassword' não pode ficar vazio" }), (0, class_validator_1.Length)(8, 50), (0, class_validator_1.Matches)(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
                    message: 'A senha precisa ter no mínimo 8 caracteres, máximo de 50, uma letra maiúscula, um número e um símbolo.',
                }), (0, swagger_1.ApiProperty)({
                    description: 'Senha de Login',
                    example: 'Abcd@1234',
                })];
            __esDecorate(null, null, _oldPassword_decorators, { kind: "field", name: "oldPassword", static: false, private: false, access: { has: function (obj) { return "oldPassword" in obj; }, get: function (obj) { return obj.oldPassword; }, set: function (obj, value) { obj.oldPassword = value; } }, metadata: _metadata }, _oldPassword_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: function (obj) { return "password" in obj; }, get: function (obj) { return obj.password; }, set: function (obj, value) { obj.password = value; } }, metadata: _metadata }, _password_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _confirmNewPassword_decorators, { kind: "field", name: "confirmNewPassword", static: false, private: false, access: { has: function (obj) { return "confirmNewPassword" in obj; }, get: function (obj) { return obj.confirmNewPassword; }, set: function (obj, value) { obj.confirmNewPassword = value; } }, metadata: _metadata }, _confirmNewPassword_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.UpdateMyPasswordDto = UpdateMyPasswordDto;
var CreatePasswordHashDto = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _password_decorators;
    var _password_initializers = [];
    var _confirmPassword_decorators;
    var _confirmPassword_initializers = [];
    var _recoverPasswordToken_decorators;
    var _recoverPasswordToken_initializers = [];
    return _a = /** @class */ (function () {
            function CreatePasswordHashDto() {
                this.password = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _password_initializers, void 0));
                this.confirmPassword = __runInitializers(this, _confirmPassword_initializers, void 0);
                this.recoverPasswordToken = __runInitializers(this, _recoverPasswordToken_initializers, void 0);
            }
            return CreatePasswordHashDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _password_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.Length)(8, 50), (0, class_validator_1.Matches)(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
                    message: 'Senha muito fraca',
                }), (0, swagger_1.ApiProperty)({
                    description: 'A senha precisa ter no mínimo 8 caracteres, máximo de 50, uma letra maiúscula, um número e um símbolo.',
                    example: 'Abcd@1234',
                })];
            _confirmPassword_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.Length)(8, 50), (0, class_validator_1.Matches)(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
                    message: 'A senha precisa ter no mínimo 8 caracteres, máximo de 50, uma letra maiúscula, um número e um símbolo.',
                }), (0, swagger_1.ApiProperty)({
                    description: 'Confirmação de senha de Login',
                    example: 'Abcd@1234',
                })];
            _recoverPasswordToken_decorators = [(0, class_validator_1.IsString)(), (0, swagger_1.ApiProperty)({
                    description: 'token de recuperação de senha.',
                    example: 'algo uuid bem rândomico',
                })];
            __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: function (obj) { return "password" in obj; }, get: function (obj) { return obj.password; }, set: function (obj, value) { obj.password = value; } }, metadata: _metadata }, _password_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _confirmPassword_decorators, { kind: "field", name: "confirmPassword", static: false, private: false, access: { has: function (obj) { return "confirmPassword" in obj; }, get: function (obj) { return obj.confirmPassword; }, set: function (obj, value) { obj.confirmPassword = value; } }, metadata: _metadata }, _confirmPassword_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _recoverPasswordToken_decorators, { kind: "field", name: "recoverPasswordToken", static: false, private: false, access: { has: function (obj) { return "recoverPasswordToken" in obj; }, get: function (obj) { return obj.recoverPasswordToken; }, set: function (obj, value) { obj.recoverPasswordToken = value; } }, metadata: _metadata }, _recoverPasswordToken_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreatePasswordHashDto = CreatePasswordHashDto;
