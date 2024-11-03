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
exports.CreateJobDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var job_affirmative_type_enum_1 = require("../enums/job-affirmative-type.enum");
var job_contract_type_enum_1 = require("../enums/job-contract-type.enum");
var job_modality_enum_1 = require("../enums/job-modality.enum");
var job_type_enum_1 = require("../enums/job-type.enum");
var CreateJobDto = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _prerequisites_decorators;
    var _prerequisites_initializers = [];
    var _benefits_decorators;
    var _benefits_initializers = [];
    var _type_decorators;
    var _type_initializers = [];
    var _typeContract_decorators;
    var _typeContract_initializers = [];
    var _contractText_decorators;
    var _contractText_initializers = [];
    var _salaryMin_decorators;
    var _salaryMin_initializers = [];
    var _salaryMax_decorators;
    var _salaryMax_initializers = [];
    var _modality_decorators;
    var _modality_initializers = [];
    var _federalUnit_decorators;
    var _federalUnit_initializers = [];
    var _city_decorators;
    var _city_initializers = [];
    var _openEndedContract_decorators;
    var _openEndedContract_initializers = [];
    var _contractType_decorators;
    var _contractType_initializers = [];
    var _affirmative_decorators;
    var _affirmative_initializers = [];
    var _affirmativeType_decorators;
    var _affirmativeType_initializers = [];
    var _company_id_decorators;
    var _company_id_initializers = [];
    return _a = /** @class */ (function () {
            function CreateJobDto() {
                this.title = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _title_initializers, void 0));
                this.description = __runInitializers(this, _description_initializers, void 0);
                this.prerequisites = __runInitializers(this, _prerequisites_initializers, void 0);
                this.benefits = __runInitializers(this, _benefits_initializers, void 0);
                this.type = __runInitializers(this, _type_initializers, void 0);
                this.typeContract = __runInitializers(this, _typeContract_initializers, void 0);
                this.contractText = __runInitializers(this, _contractText_initializers, void 0);
                this.salaryMin = __runInitializers(this, _salaryMin_initializers, void 0);
                this.salaryMax = __runInitializers(this, _salaryMax_initializers, void 0);
                this.modality = __runInitializers(this, _modality_initializers, void 0);
                this.federalUnit = __runInitializers(this, _federalUnit_initializers, void 0);
                this.city = __runInitializers(this, _city_initializers, void 0);
                this.openEndedContract = __runInitializers(this, _openEndedContract_initializers, void 0);
                this.contractType = __runInitializers(this, _contractType_initializers, void 0);
                this.affirmative = __runInitializers(this, _affirmative_initializers, void 0);
                this.affirmativeType = __runInitializers(this, _affirmativeType_initializers, void 0);
                this.company_id = __runInitializers(this, _company_id_initializers, void 0);
            }
            return CreateJobDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _title_decorators = [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)(), (0, class_validator_1.MaxLength)(30), (0, swagger_1.ApiProperty)({
                    required: true,
                    description: 'Título do trabalho',
                    example: 'Desenvolvedor',
                })];
            _description_decorators = [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)(), (0, class_validator_1.MaxLength)(3000), (0, swagger_1.ApiProperty)({
                    required: true,
                    description: 'Descrição do trabalho',
                    example: 'Trabalho com vendas',
                })];
            _prerequisites_decorators = [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)(), (0, class_validator_1.MaxLength)(3000), (0, swagger_1.ApiProperty)({
                    required: true,
                    description: 'Pre-requisitos para a vaga',
                    example: 'Conhecimento em python 3',
                })];
            _benefits_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), (0, class_validator_1.MaxLength)(3000), (0, swagger_1.ApiProperty)({
                    required: false,
                    description: 'Beneficios da vaga',
                    example: 'Vale alimentação, Auxilio homeofice',
                })];
            _type_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsEnum)(job_type_enum_1.JobsTypeEnum), (0, swagger_1.ApiProperty)({
                    required: false,
                    description: 'Senioridade da vaga',
                    enum: [
                        job_type_enum_1.JobsTypeEnum.ANALYST,
                        job_type_enum_1.JobsTypeEnum.JUNIOR,
                        job_type_enum_1.JobsTypeEnum.TRAINEE,
                        job_type_enum_1.JobsTypeEnum.INTERNSHIP,
                    ],
                    example: job_type_enum_1.JobsTypeEnum.JUNIOR,
                })];
            _typeContract_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsEnum)(job_contract_type_enum_1.JobsTypeContractEnum), (0, swagger_1.ApiProperty)({
                    required: false,
                    description: 'Tipo de contrato do trabalho',
                    example: job_contract_type_enum_1.JobsTypeContractEnum.CLT,
                    enum: [
                        job_contract_type_enum_1.JobsTypeContractEnum.CLT,
                        job_contract_type_enum_1.JobsTypeContractEnum.PJ,
                        job_contract_type_enum_1.JobsTypeContractEnum.OTHER,
                    ],
                })];
            _contractText_decorators = [(0, class_validator_1.ValidateIf)(function (values) { return values.typeContract === job_contract_type_enum_1.JobsTypeContractEnum.OTHER; }), (0, class_validator_1.IsString)(), (0, swagger_1.ApiProperty)({
                    required: false,
                    example: 'Freelance',
                })];
            _salaryMin_decorators = [(0, class_validator_1.IsNumber)(), (0, class_validator_1.ValidateIf)(function (values) { return values.salaryMax; }), (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 0, allowNaN: false, allowInfinity: false }), (0, class_validator_1.Max)(99999), (0, class_validator_1.Min)(0), (0, swagger_1.ApiProperty)({
                    required: false,
                    description: 'Modalidade o valor da remuneração em meses',
                    example: 3000,
                })];
            _salaryMax_decorators = [(0, class_validator_1.IsNumber)(), (0, class_validator_1.ValidateIf)(function (values) { return values.salaryMin; }), (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 0, allowNaN: false, allowInfinity: false }), (0, class_validator_1.Max)(99999), (0, class_validator_1.Min)(0), (0, swagger_1.ApiProperty)({
                    required: false,
                    description: 'Modalidade o valor da remuneração em meses',
                    example: 3000,
                })];
            _modality_decorators = [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsEnum)(job_modality_enum_1.JobsModalityEnum), (0, swagger_1.ApiProperty)({
                    required: true,
                    description: 'Modalidade do trabalho',
                    example: job_modality_enum_1.JobsModalityEnum.REMOTE,
                    enum: [
                        job_modality_enum_1.JobsModalityEnum.HYBRID,
                        job_modality_enum_1.JobsModalityEnum.ON_SITE,
                        job_modality_enum_1.JobsModalityEnum.REMOTE,
                    ],
                })];
            _federalUnit_decorators = [(0, class_validator_1.ValidateIf)(function (values) { return values.modality != job_modality_enum_1.JobsModalityEnum.REMOTE; }), (0, swagger_1.ApiProperty)({
                    required: false,
                    description: 'Informe a unidade federativa',
                    example: 'DF',
                }), (0, class_validator_1.IsString)()];
            _city_decorators = [(0, class_validator_1.ValidateIf)(function (values) { return values.modality != job_modality_enum_1.JobsModalityEnum.REMOTE; }), (0, class_validator_1.IsString)(), (0, swagger_1.ApiProperty)({
                    required: false,
                    description: 'Cidade do local de trabalho caso a vaga nao seja remota',
                    example: 'São Paulo',
                })];
            _openEndedContract_decorators = [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsBoolean)(), (0, swagger_1.ApiProperty)({
                    required: true,
                    description: 'O contrato de trabalho é por tempo indeterminado?',
                    example: true,
                })];
            _contractType_decorators = [(0, class_validator_1.ValidateIf)(function (values) { return !values.indefinideContract; }), (0, class_validator_1.IsString)(), (0, swagger_1.ApiProperty)({
                    required: false,
                    description: 'Tempo de contrato de trabalho',
                    example: '6 Meses',
                })];
            _affirmative_decorators = [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsBoolean)(), (0, swagger_1.ApiProperty)({
                    required: true,
                    description: 'Verifica se a vaga é afirmativa',
                    example: false,
                })];
            _affirmativeType_decorators = [(0, class_validator_1.ValidateIf)(function (values) { return values.affirmative; }), (0, class_validator_1.IsEnum)(job_affirmative_type_enum_1.JobsAffirmativeTypeEnum), (0, swagger_1.ApiProperty)({
                    required: false,
                    description: 'Opções da vaga afirmativa',
                    example: job_affirmative_type_enum_1.JobsAffirmativeTypeEnum.BLACK_BROWN_PERSON,
                    enum: [
                        job_affirmative_type_enum_1.JobsAffirmativeTypeEnum.BLACK_BROWN_PERSON,
                        job_affirmative_type_enum_1.JobsAffirmativeTypeEnum.CIS_TRANS_WOMEN,
                        job_affirmative_type_enum_1.JobsAffirmativeTypeEnum.LGBTQIA,
                        job_affirmative_type_enum_1.JobsAffirmativeTypeEnum.SIXTY_PLUS,
                        job_affirmative_type_enum_1.JobsAffirmativeTypeEnum.PWD,
                    ],
                })];
            _company_id_decorators = [(0, class_validator_1.IsOptional)(), (0, class_transformer_1.Exclude)(), (0, class_validator_1.IsString)()];
            __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _prerequisites_decorators, { kind: "field", name: "prerequisites", static: false, private: false, access: { has: function (obj) { return "prerequisites" in obj; }, get: function (obj) { return obj.prerequisites; }, set: function (obj, value) { obj.prerequisites = value; } }, metadata: _metadata }, _prerequisites_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _benefits_decorators, { kind: "field", name: "benefits", static: false, private: false, access: { has: function (obj) { return "benefits" in obj; }, get: function (obj) { return obj.benefits; }, set: function (obj, value) { obj.benefits = value; } }, metadata: _metadata }, _benefits_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: function (obj) { return "type" in obj; }, get: function (obj) { return obj.type; }, set: function (obj, value) { obj.type = value; } }, metadata: _metadata }, _type_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _typeContract_decorators, { kind: "field", name: "typeContract", static: false, private: false, access: { has: function (obj) { return "typeContract" in obj; }, get: function (obj) { return obj.typeContract; }, set: function (obj, value) { obj.typeContract = value; } }, metadata: _metadata }, _typeContract_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _contractText_decorators, { kind: "field", name: "contractText", static: false, private: false, access: { has: function (obj) { return "contractText" in obj; }, get: function (obj) { return obj.contractText; }, set: function (obj, value) { obj.contractText = value; } }, metadata: _metadata }, _contractText_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _salaryMin_decorators, { kind: "field", name: "salaryMin", static: false, private: false, access: { has: function (obj) { return "salaryMin" in obj; }, get: function (obj) { return obj.salaryMin; }, set: function (obj, value) { obj.salaryMin = value; } }, metadata: _metadata }, _salaryMin_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _salaryMax_decorators, { kind: "field", name: "salaryMax", static: false, private: false, access: { has: function (obj) { return "salaryMax" in obj; }, get: function (obj) { return obj.salaryMax; }, set: function (obj, value) { obj.salaryMax = value; } }, metadata: _metadata }, _salaryMax_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _modality_decorators, { kind: "field", name: "modality", static: false, private: false, access: { has: function (obj) { return "modality" in obj; }, get: function (obj) { return obj.modality; }, set: function (obj, value) { obj.modality = value; } }, metadata: _metadata }, _modality_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _federalUnit_decorators, { kind: "field", name: "federalUnit", static: false, private: false, access: { has: function (obj) { return "federalUnit" in obj; }, get: function (obj) { return obj.federalUnit; }, set: function (obj, value) { obj.federalUnit = value; } }, metadata: _metadata }, _federalUnit_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _city_decorators, { kind: "field", name: "city", static: false, private: false, access: { has: function (obj) { return "city" in obj; }, get: function (obj) { return obj.city; }, set: function (obj, value) { obj.city = value; } }, metadata: _metadata }, _city_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _openEndedContract_decorators, { kind: "field", name: "openEndedContract", static: false, private: false, access: { has: function (obj) { return "openEndedContract" in obj; }, get: function (obj) { return obj.openEndedContract; }, set: function (obj, value) { obj.openEndedContract = value; } }, metadata: _metadata }, _openEndedContract_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _contractType_decorators, { kind: "field", name: "contractType", static: false, private: false, access: { has: function (obj) { return "contractType" in obj; }, get: function (obj) { return obj.contractType; }, set: function (obj, value) { obj.contractType = value; } }, metadata: _metadata }, _contractType_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _affirmative_decorators, { kind: "field", name: "affirmative", static: false, private: false, access: { has: function (obj) { return "affirmative" in obj; }, get: function (obj) { return obj.affirmative; }, set: function (obj, value) { obj.affirmative = value; } }, metadata: _metadata }, _affirmative_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _affirmativeType_decorators, { kind: "field", name: "affirmativeType", static: false, private: false, access: { has: function (obj) { return "affirmativeType" in obj; }, get: function (obj) { return obj.affirmativeType; }, set: function (obj, value) { obj.affirmativeType = value; } }, metadata: _metadata }, _affirmativeType_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _company_id_decorators, { kind: "field", name: "company_id", static: false, private: false, access: { has: function (obj) { return "company_id" in obj; }, get: function (obj) { return obj.company_id; }, set: function (obj, value) { obj.company_id = value; } }, metadata: _metadata }, _company_id_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateJobDto = CreateJobDto;
