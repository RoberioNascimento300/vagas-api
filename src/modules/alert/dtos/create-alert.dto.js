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
exports.CreateAlertDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var CreateAlertDto = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _userId_decorators;
    var _userId_initializers = [];
    var _keyword_decorators;
    var _keyword_initializers = [];
    var _location_decorators;
    var _location_initializers = [];
    return _a = /** @class */ (function () {
            function CreateAlertDto() {
                this.userId = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _userId_initializers, void 0));
                this.keyword = __runInitializers(this, _keyword_initializers, void 0);
                this.location = __runInitializers(this, _location_initializers, void 0);
            }
            return CreateAlertDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _userId_decorators = [(0, swagger_1.ApiProperty)({
                    name: 'userId',
                    type: String,
                }), (0, class_validator_1.IsString)({ message: 'O campo userId deve ser uma string' }), (0, class_validator_1.IsNotEmpty)({ message: 'O campo userId não pode estar vazio' })];
            _keyword_decorators = [(0, swagger_1.ApiProperty)({
                    name: 'keyword',
                    type: String,
                }), (0, class_validator_1.IsString)({ message: 'O campo keyword deve ser uma string' }), (0, class_validator_1.IsNotEmpty)({ message: 'O campo keyword não pode estar vazio' })];
            _location_decorators = [(0, swagger_1.ApiProperty)({
                    name: 'location',
                    type: String,
                }), (0, class_validator_1.IsString)({ message: 'O campo location deve ser uma string' }), (0, class_validator_1.IsNotEmpty)({ message: 'O campo location não pode estar vazio' })];
            __esDecorate(null, null, _userId_decorators, { kind: "field", name: "userId", static: false, private: false, access: { has: function (obj) { return "userId" in obj; }, get: function (obj) { return obj.userId; }, set: function (obj, value) { obj.userId = value; } }, metadata: _metadata }, _userId_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _keyword_decorators, { kind: "field", name: "keyword", static: false, private: false, access: { has: function (obj) { return "keyword" in obj; }, get: function (obj) { return obj.keyword; }, set: function (obj, value) { obj.keyword = value; } }, metadata: _metadata }, _keyword_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _location_decorators, { kind: "field", name: "location", static: false, private: false, access: { has: function (obj) { return "location" in obj; }, get: function (obj) { return obj.location; }, set: function (obj, value) { obj.location = value; } }, metadata: _metadata }, _location_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateAlertDto = CreateAlertDto;
