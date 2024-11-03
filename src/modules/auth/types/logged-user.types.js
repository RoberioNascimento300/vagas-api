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
exports.LoggerUserType = void 0;
var swagger_1 = require("@nestjs/swagger");
var login_type_enum_1 = require("../enums/login-type.enum");
var LoggerUserType = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _type_decorators;
    var _type_initializers = [];
    var _mailConfirm_decorators;
    var _mailConfirm_initializers = [];
    var _recoverPasswordToken_decorators;
    var _recoverPasswordToken_initializers = [];
    var _created_at_decorators;
    var _created_at_initializers = [];
    var _updated_at_decorators;
    var _updated_at_initializers = [];
    var _policies_decorators;
    var _policies_initializers = [];
    var _ip_decorators;
    var _ip_initializers = [];
    return _a = /** @class */ (function () {
            function LoggerUserType() {
                this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
                this.name = __runInitializers(this, _name_initializers, void 0);
                this.email = __runInitializers(this, _email_initializers, void 0);
                this.type = __runInitializers(this, _type_initializers, void 0);
                this.mailConfirm = __runInitializers(this, _mailConfirm_initializers, void 0);
                this.recoverPasswordToken = __runInitializers(this, _recoverPasswordToken_initializers, void 0);
                this.created_at = __runInitializers(this, _created_at_initializers, void 0);
                this.updated_at = __runInitializers(this, _updated_at_initializers, void 0);
                this.policies = __runInitializers(this, _policies_initializers, void 0);
                this.ip = __runInitializers(this, _ip_initializers, void 0);
            }
            return LoggerUserType;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [(0, swagger_1.ApiProperty)({ example: '218926fe-a3fa-4381-af8e-77c4017ebdb8' })];
            _name_decorators = [(0, swagger_1.ApiProperty)({ example: 'Any Name' })];
            _email_decorators = [(0, swagger_1.ApiProperty)({ example: 'EmailParaTeste@teste.com' })];
            _type_decorators = [(0, swagger_1.ApiProperty)({ example: login_type_enum_1.LoginTypeEnum.USER })];
            _mailConfirm_decorators = [(0, swagger_1.ApiProperty)({ example: true })];
            _recoverPasswordToken_decorators = [(0, swagger_1.ApiProperty)({ example: null })];
            _created_at_decorators = [(0, swagger_1.ApiProperty)({ example: '2023-03-25T04:40:28.329Z' })];
            _updated_at_decorators = [(0, swagger_1.ApiProperty)({ example: '2023-03-25T04:40:28.329Z' })];
            _policies_decorators = [(0, swagger_1.ApiProperty)({ example: true })];
            _ip_decorators = [(0, swagger_1.ApiProperty)({ example: '127.0.0.1' })];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: function (obj) { return "type" in obj; }, get: function (obj) { return obj.type; }, set: function (obj, value) { obj.type = value; } }, metadata: _metadata }, _type_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _mailConfirm_decorators, { kind: "field", name: "mailConfirm", static: false, private: false, access: { has: function (obj) { return "mailConfirm" in obj; }, get: function (obj) { return obj.mailConfirm; }, set: function (obj, value) { obj.mailConfirm = value; } }, metadata: _metadata }, _mailConfirm_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _recoverPasswordToken_decorators, { kind: "field", name: "recoverPasswordToken", static: false, private: false, access: { has: function (obj) { return "recoverPasswordToken" in obj; }, get: function (obj) { return obj.recoverPasswordToken; }, set: function (obj, value) { obj.recoverPasswordToken = value; } }, metadata: _metadata }, _recoverPasswordToken_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _created_at_decorators, { kind: "field", name: "created_at", static: false, private: false, access: { has: function (obj) { return "created_at" in obj; }, get: function (obj) { return obj.created_at; }, set: function (obj, value) { obj.created_at = value; } }, metadata: _metadata }, _created_at_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _updated_at_decorators, { kind: "field", name: "updated_at", static: false, private: false, access: { has: function (obj) { return "updated_at" in obj; }, get: function (obj) { return obj.updated_at; }, set: function (obj, value) { obj.updated_at = value; } }, metadata: _metadata }, _updated_at_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _policies_decorators, { kind: "field", name: "policies", static: false, private: false, access: { has: function (obj) { return "policies" in obj; }, get: function (obj) { return obj.policies; }, set: function (obj, value) { obj.policies = value; } }, metadata: _metadata }, _policies_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _ip_decorators, { kind: "field", name: "ip", static: false, private: false, access: { has: function (obj) { return "ip" in obj; }, get: function (obj) { return obj.ip; }, set: function (obj, value) { obj.ip = value; } }, metadata: _metadata }, _ip_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.LoggerUserType = LoggerUserType;
