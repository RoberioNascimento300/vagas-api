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
exports.UserLoginResponseDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var user_response_login_types_1 = require("../types/user-response-login.types");
var UserLoginResponseDto = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _token_decorators;
    var _token_initializers = [];
    var _info_decorators;
    var _info_initializers = [];
    return _a = /** @class */ (function () {
            function UserLoginResponseDto() {
                this.token = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _token_initializers, void 0));
                this.info = __runInitializers(this, _info_initializers, void 0);
            }
            return UserLoginResponseDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _token_decorators = [(0, swagger_1.ApiProperty)({
                    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkVtYWlsUGFyYVRlc3RlQHRlc3RlLmNvbSIsImlhdCI6MTY3OTcwODczNSwiZXhwIjoxNjc5Nzk1MTM1fQ.G1r68O4MNDXx_uy7AbgltEln2cOd7UGxw6jNXbF5HZ0',
                    description: 'Token de autenticação JWT',
                })];
            _info_decorators = [(0, swagger_1.ApiProperty)({ example: user_response_login_types_1.UserResponseLoginTypes })];
            __esDecorate(null, null, _token_decorators, { kind: "field", name: "token", static: false, private: false, access: { has: function (obj) { return "token" in obj; }, get: function (obj) { return obj.token; }, set: function (obj, value) { obj.token = value; } }, metadata: _metadata }, _token_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _info_decorators, { kind: "field", name: "info", static: false, private: false, access: { has: function (obj) { return "info" in obj; }, get: function (obj) { return obj.info; }, set: function (obj, value) { obj.info = value; } }, metadata: _metadata }, _info_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.UserLoginResponseDto = UserLoginResponseDto;
