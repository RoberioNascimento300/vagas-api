"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.UpdateUserDto = void 0;
var mapped_types_1 = require("@nestjs/mapped-types");
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var create_user_dto_1 = require("./create-user.dto");
var UpdateUserDto = function () {
    var _a;
    var _classSuper = (0, mapped_types_1.PartialType)(create_user_dto_1.CreateUserDto);
    var _instanceExtraInitializers = [];
    var _mainPhone_decorators;
    var _mainPhone_initializers = [];
    var _phone_decorators;
    var _phone_initializers = [];
    var _city_decorators;
    var _city_initializers = [];
    var _state_decorators;
    var _state_initializers = [];
    var _profile_decorators;
    var _profile_initializers = [];
    var _profileKey_decorators;
    var _profileKey_initializers = [];
    var _file_decorators;
    var _file_initializers = [];
    return _a = /** @class */ (function (_super) {
            __extends(UpdateUserDto, _super);
            function UpdateUserDto() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.mainPhone = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _mainPhone_initializers, void 0));
                _this.phone = __runInitializers(_this, _phone_initializers, void 0);
                _this.city = __runInitializers(_this, _city_initializers, void 0);
                _this.state = __runInitializers(_this, _state_initializers, void 0);
                _this.profile = __runInitializers(_this, _profile_initializers, void 0);
                _this.profileKey = __runInitializers(_this, _profileKey_initializers, void 0);
                _this.file = __runInitializers(_this, _file_initializers, void 0);
                return _this;
            }
            return UpdateUserDto;
        }(_classSuper)),
        (function () {
            var _b;
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_b = _classSuper[Symbol.metadata]) !== null && _b !== void 0 ? _b : null) : void 0;
            _mainPhone_decorators = [(0, swagger_1.ApiProperty)({ required: true, example: '11111111111' }), (0, class_transformer_1.Transform)(function (_b) {
                    var value = _b.value;
                    return value.replace(/\D/g, '');
                }), (0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)()];
            _phone_decorators = [(0, swagger_1.ApiProperty)({ required: false, example: '11111111111' }), (0, class_transformer_1.Transform)(function (_b) {
                    var value = _b.value;
                    return value.replace(/\D/g, '');
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _city_decorators = [(0, swagger_1.ApiProperty)({ required: true, example: 'Rio Branco' }), (0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)()];
            _state_decorators = [(0, swagger_1.ApiProperty)({ required: true, example: 'Acre' }), (0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)()];
            _profile_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), (0, swagger_1.ApiProperty)({
                    description: 'Imagem do perfil',
                })];
            _profileKey_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), (0, swagger_1.ApiProperty)({
                    description: 'Chave para remoção da imagem do perfil',
                })];
            _file_decorators = [(0, class_validator_1.IsOptional)()];
            __esDecorate(null, null, _mainPhone_decorators, { kind: "field", name: "mainPhone", static: false, private: false, access: { has: function (obj) { return "mainPhone" in obj; }, get: function (obj) { return obj.mainPhone; }, set: function (obj, value) { obj.mainPhone = value; } }, metadata: _metadata }, _mainPhone_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _phone_decorators, { kind: "field", name: "phone", static: false, private: false, access: { has: function (obj) { return "phone" in obj; }, get: function (obj) { return obj.phone; }, set: function (obj, value) { obj.phone = value; } }, metadata: _metadata }, _phone_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _city_decorators, { kind: "field", name: "city", static: false, private: false, access: { has: function (obj) { return "city" in obj; }, get: function (obj) { return obj.city; }, set: function (obj, value) { obj.city = value; } }, metadata: _metadata }, _city_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _state_decorators, { kind: "field", name: "state", static: false, private: false, access: { has: function (obj) { return "state" in obj; }, get: function (obj) { return obj.state; }, set: function (obj, value) { obj.state = value; } }, metadata: _metadata }, _state_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _profile_decorators, { kind: "field", name: "profile", static: false, private: false, access: { has: function (obj) { return "profile" in obj; }, get: function (obj) { return obj.profile; }, set: function (obj, value) { obj.profile = value; } }, metadata: _metadata }, _profile_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _profileKey_decorators, { kind: "field", name: "profileKey", static: false, private: false, access: { has: function (obj) { return "profileKey" in obj; }, get: function (obj) { return obj.profileKey; }, set: function (obj, value) { obj.profileKey = value; } }, metadata: _metadata }, _profileKey_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _file_decorators, { kind: "field", name: "file", static: false, private: false, access: { has: function (obj) { return "file" in obj; }, get: function (obj) { return obj.file; }, set: function (obj, value) { obj.file = value; } }, metadata: _metadata }, _file_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.UpdateUserDto = UpdateUserDto;
