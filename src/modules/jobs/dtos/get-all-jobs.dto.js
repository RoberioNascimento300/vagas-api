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
exports.GetAllJobsDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var job_modality_enum_1 = require("../enums/job-modality.enum");
var GetAllJobsDto = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _modality_decorators;
    var _modality_initializers = [];
    var _federalUnit_decorators;
    var _federalUnit_initializers = [];
    var _city_decorators;
    var _city_initializers = [];
    return _a = /** @class */ (function () {
            function GetAllJobsDto() {
                this.modality = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _modality_initializers, void 0));
                this.federalUnit = __runInitializers(this, _federalUnit_initializers, void 0);
                this.city = __runInitializers(this, _city_initializers, void 0);
            }
            return GetAllJobsDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _modality_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), (0, swagger_1.ApiProperty)({
                    required: false,
                    description: 'Modalidade do trabalho',
                    enum: [
                        job_modality_enum_1.JobsModalityEnum.HYBRID,
                        job_modality_enum_1.JobsModalityEnum.ON_SITE,
                        job_modality_enum_1.JobsModalityEnum.REMOTE,
                    ],
                })];
            _federalUnit_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), (0, swagger_1.ApiProperty)({
                    required: false,
                    description: 'Filtro por unidade federal',
                    example: 'SP',
                })];
            _city_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), (0, swagger_1.ApiProperty)({
                    required: false,
                    description: 'Filtro por cidade',
                    example: 'São Paulo',
                })];
            __esDecorate(null, null, _modality_decorators, { kind: "field", name: "modality", static: false, private: false, access: { has: function (obj) { return "modality" in obj; }, get: function (obj) { return obj.modality; }, set: function (obj, value) { obj.modality = value; } }, metadata: _metadata }, _modality_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _federalUnit_decorators, { kind: "field", name: "federalUnit", static: false, private: false, access: { has: function (obj) { return "federalUnit" in obj; }, get: function (obj) { return obj.federalUnit; }, set: function (obj, value) { obj.federalUnit = value; } }, metadata: _metadata }, _federalUnit_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _city_decorators, { kind: "field", name: "city", static: false, private: false, access: { has: function (obj) { return "city" in obj; }, get: function (obj) { return obj.city; }, set: function (obj, value) { obj.city = value; } }, metadata: _metadata }, _city_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.GetAllJobsDto = GetAllJobsDto;
