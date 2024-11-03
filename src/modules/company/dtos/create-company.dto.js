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
exports.CreateCompanyDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var CreateCompanyDto = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _companyName_decorators;
    var _companyName_initializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _cnpj_decorators;
    var _cnpj_initializers = [];
    var _password_decorators;
    var _password_initializers = [];
    var _passwordConfirmation_decorators;
    var _passwordConfirmation_initializers = [];
    return _a = /** @class */ (function () {
            function CreateCompanyDto() {
                this.companyName = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _companyName_initializers, void 0));
                this.email = __runInitializers(this, _email_initializers, void 0);
                this.cnpj = __runInitializers(this, _cnpj_initializers, void 0);
                this.password = __runInitializers(this, _password_initializers, void 0);
                this.passwordConfirmation = __runInitializers(this, _passwordConfirmation_initializers, void 0);
            }
            return CreateCompanyDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _companyName_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Nome da empresa (até 30 caracteres)',
                    example: 'Pipomills',
                }), (0, class_validator_1.IsString)({ message: 'O campo companyName deve ser uma string' }), (0, class_validator_1.IsNotEmpty)({ message: 'O campo companyName não pode estar vazio' }), (0, class_validator_1.MaxLength)(30)];
            _email_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Email da empresa',
                    example: 'pipomills@pipomills.com',
                }), (0, class_validator_1.IsString)({ message: 'O campo email deve ser uma string' }), (0, class_validator_1.IsNotEmpty)({ message: 'O campo email não pode estar vazio' }), (0, class_validator_1.IsEmail)()];
            _cnpj_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'CNPJ (formato: xx.xxx.xxx/xxxx-xx)',
                    example: '67.979.311/0001-15',
                }), (0, class_validator_1.IsString)({ message: 'O campo cnpj deve ser uma string' }), (0, class_validator_1.IsNotEmpty)({ message: 'O campo cnpj não pode estar vazio' }), (0, class_validator_1.MaxLength)(14), (0, class_validator_1.MinLength)(14)];
            _password_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Senha de Login (8 a 20 caracteres, deve conter letras maiúsculas, minúsculas, números e caracteres especiais)',
                    example: 'Abcd@1234',
                }), (0, class_validator_1.IsString)({ message: 'O campo password deve ser uma string' }), (0, class_validator_1.IsNotEmpty)({ message: 'O campo password não pode estar vazio' }), (0, class_validator_1.Matches)(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
                    message: 'A senha deve conter letras maiúsculas, minúsculas, números e caracteres especiais',
                }), (0, class_validator_1.Length)(8, 20)];
            _passwordConfirmation_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Confirmação de Senha de Login (8 a 20 caracteres, deve ser idêntica à senha)',
                    example: 'Abcd@1234',
                }), (0, class_validator_1.IsString)({ message: 'O campo passwordConfirmation deve ser uma string' }), (0, class_validator_1.IsNotEmpty)({ message: 'O campo passwordConfirmation não pode estar vazio' }), (0, class_validator_1.Matches)(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
                    message: 'A confirmação de senha deve conter letras maiúsculas, minúsculas, números e caracteres especiais',
                }), (0, class_validator_1.Length)(8, 20)];
            __esDecorate(null, null, _companyName_decorators, { kind: "field", name: "companyName", static: false, private: false, access: { has: function (obj) { return "companyName" in obj; }, get: function (obj) { return obj.companyName; }, set: function (obj, value) { obj.companyName = value; } }, metadata: _metadata }, _companyName_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _cnpj_decorators, { kind: "field", name: "cnpj", static: false, private: false, access: { has: function (obj) { return "cnpj" in obj; }, get: function (obj) { return obj.cnpj; }, set: function (obj, value) { obj.cnpj = value; } }, metadata: _metadata }, _cnpj_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: function (obj) { return "password" in obj; }, get: function (obj) { return obj.password; }, set: function (obj, value) { obj.password = value; } }, metadata: _metadata }, _password_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _passwordConfirmation_decorators, { kind: "field", name: "passwordConfirmation", static: false, private: false, access: { has: function (obj) { return "passwordConfirmation" in obj; }, get: function (obj) { return obj.passwordConfirmation; }, set: function (obj, value) { obj.passwordConfirmation = value; } }, metadata: _metadata }, _passwordConfirmation_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateCompanyDto = CreateCompanyDto;
