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
exports.DataApplicationDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var DataApplicationDto = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _user_id_decorators;
    var _user_id_initializers = [];
    var _job_id_decorators;
    var _job_id_initializers = [];
    var _curriculum_id_decorators;
    var _curriculum_id_initializers = [];
    return _a = /** @class */ (function () {
            function DataApplicationDto() {
                this.user_id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _user_id_initializers, void 0));
                this.job_id = __runInitializers(this, _job_id_initializers, void 0);
                this.curriculum_id = __runInitializers(this, _curriculum_id_initializers, void 0);
            }
            return DataApplicationDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _user_id_decorators = [(0, swagger_1.ApiProperty)({
                    example: '4b9864dc-79cf-4018-96a4-ad82137ba321',
                    description: 'ID do usuário',
                }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)({ message: 'O campo user_id não pode estar vazio' })];
            _job_id_decorators = [(0, swagger_1.ApiProperty)({
                    example: '4b9864dc-79cf-4018-96a4-ad82137ba321',
                    description: 'ID da vaga',
                }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)({ message: 'O campo job_id não pode estar vazio' })];
            _curriculum_id_decorators = [(0, swagger_1.ApiProperty)({
                    example: 'fed50a27-3f51-4642-bfd6-57d5bd3c352a',
                    description: 'ID do currículo',
                }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)({ message: 'O campo curriculum_id não pode estar vazio' })];
            __esDecorate(null, null, _user_id_decorators, { kind: "field", name: "user_id", static: false, private: false, access: { has: function (obj) { return "user_id" in obj; }, get: function (obj) { return obj.user_id; }, set: function (obj, value) { obj.user_id = value; } }, metadata: _metadata }, _user_id_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _job_id_decorators, { kind: "field", name: "job_id", static: false, private: false, access: { has: function (obj) { return "job_id" in obj; }, get: function (obj) { return obj.job_id; }, set: function (obj, value) { obj.job_id = value; } }, metadata: _metadata }, _job_id_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _curriculum_id_decorators, { kind: "field", name: "curriculum_id", static: false, private: false, access: { has: function (obj) { return "curriculum_id" in obj; }, get: function (obj) { return obj.curriculum_id; }, set: function (obj, value) { obj.curriculum_id = value; } }, metadata: _metadata }, _curriculum_id_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.DataApplicationDto = DataApplicationDto;
