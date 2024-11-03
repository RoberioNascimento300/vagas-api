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
exports.UpdateCompanyDto = void 0;
var mapped_types_1 = require("@nestjs/mapped-types");
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var company_size_enum_1 = require("../enum/company-size.enum");
var create_company_dto_1 = require("./create-company.dto");
var UpdateCompanyDto = function () {
    var _a;
    var _classSuper = (0, mapped_types_1.PartialType)(create_company_dto_1.CreateCompanyDto);
    var _instanceExtraInitializers = [];
    var _companyType_decorators;
    var _companyType_initializers = [];
    var _companySize_decorators;
    var _companySize_initializers = [];
    var _uf_decorators;
    var _uf_initializers = [];
    var _otherSite_decorators;
    var _otherSite_initializers = [];
    var _companySite_decorators;
    var _companySite_initializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _profile_decorators;
    var _profile_initializers = [];
    var _profileKey_decorators;
    var _profileKey_initializers = [];
    var _file_decorators;
    var _file_initializers = [];
    return _a = /** @class */ (function (_super) {
            __extends(UpdateCompanyDto, _super);
            function UpdateCompanyDto() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.companyType = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _companyType_initializers, void 0));
                _this.companySize = __runInitializers(_this, _companySize_initializers, void 0);
                _this.uf = __runInitializers(_this, _uf_initializers, void 0);
                _this.otherSite = __runInitializers(_this, _otherSite_initializers, void 0);
                _this.companySite = __runInitializers(_this, _companySite_initializers, void 0);
                _this.description = __runInitializers(_this, _description_initializers, void 0);
                _this.profile = __runInitializers(_this, _profile_initializers, void 0);
                _this.profileKey = __runInitializers(_this, _profileKey_initializers, void 0);
                _this.file = __runInitializers(_this, _file_initializers, void 0);
                return _this;
            }
            return UpdateCompanyDto;
        }(_classSuper)),
        (function () {
            var _b;
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_b = _classSuper[Symbol.metadata]) !== null && _b !== void 0 ? _b : null) : void 0;
            _companyType_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Tipo de empresa (por exemplo: "Empresa de Tecnologia")',
                    example: 'Empresa de Tecnologia',
                    required: false,
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)({ message: 'O campo companyType deve ser uma string' })];
            _companySize_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Porte da empresa (por exemplo: "BIG_SIZE")',
                    example: company_size_enum_1.CompanySizeEnum.BIG_SIZE,
                    enum: company_size_enum_1.CompanySizeEnum,
                    required: false,
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)({ message: 'O campo companySize deve ser uma string' }), (0, class_validator_1.IsEnum)(company_size_enum_1.CompanySizeEnum)];
            _uf_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Localização da empresa (por exemplo: "SP")',
                    example: 'SP',
                }), (0, class_validator_1.IsNotEmpty)({ message: 'O campo uf não pode estar vazio' }), (0, class_validator_1.IsString)({ message: 'O campo uf deve ser uma string' })];
            _otherSite_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Redes sociais da empresa',
                    example: {
                        instagran: 'https://www.instagram.com/suaempresa',
                        linkedin: 'https://www.linkedin.com/suaempresa',
                        twitter: 'https://www.twitter.com/suaempresa',
                    },
                    required: false,
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsObject)()];
            _companySite_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Site da empresa (por exemplo: "www.soujunior.com.br")',
                    example: 'www.soujunior.com.br',
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)({ message: 'O campo companySite deve ser uma string' })];
            _description_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Descrição da empresa (até 2000 caracteres)',
                    example: 'Breve Descrição da Empresa',
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)({ message: 'O campo description deve ser uma string' }), (0, class_validator_1.MaxLength)(2000)];
            _profile_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Imagem do perfil da empresa',
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)({ message: 'O campo profile deve ser uma string' })];
            _profileKey_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Chave para remoção da imagem do perfil',
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)({ message: 'O campo profileKey deve ser uma string' })];
            _file_decorators = [(0, class_validator_1.IsOptional)()];
            __esDecorate(null, null, _companyType_decorators, { kind: "field", name: "companyType", static: false, private: false, access: { has: function (obj) { return "companyType" in obj; }, get: function (obj) { return obj.companyType; }, set: function (obj, value) { obj.companyType = value; } }, metadata: _metadata }, _companyType_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _companySize_decorators, { kind: "field", name: "companySize", static: false, private: false, access: { has: function (obj) { return "companySize" in obj; }, get: function (obj) { return obj.companySize; }, set: function (obj, value) { obj.companySize = value; } }, metadata: _metadata }, _companySize_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _uf_decorators, { kind: "field", name: "uf", static: false, private: false, access: { has: function (obj) { return "uf" in obj; }, get: function (obj) { return obj.uf; }, set: function (obj, value) { obj.uf = value; } }, metadata: _metadata }, _uf_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _otherSite_decorators, { kind: "field", name: "otherSite", static: false, private: false, access: { has: function (obj) { return "otherSite" in obj; }, get: function (obj) { return obj.otherSite; }, set: function (obj, value) { obj.otherSite = value; } }, metadata: _metadata }, _otherSite_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _companySite_decorators, { kind: "field", name: "companySite", static: false, private: false, access: { has: function (obj) { return "companySite" in obj; }, get: function (obj) { return obj.companySite; }, set: function (obj, value) { obj.companySite = value; } }, metadata: _metadata }, _companySite_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _profile_decorators, { kind: "field", name: "profile", static: false, private: false, access: { has: function (obj) { return "profile" in obj; }, get: function (obj) { return obj.profile; }, set: function (obj, value) { obj.profile = value; } }, metadata: _metadata }, _profile_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _profileKey_decorators, { kind: "field", name: "profileKey", static: false, private: false, access: { has: function (obj) { return "profileKey" in obj; }, get: function (obj) { return obj.profileKey; }, set: function (obj, value) { obj.profileKey = value; } }, metadata: _metadata }, _profileKey_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _file_decorators, { kind: "field", name: "file", static: false, private: false, access: { has: function (obj) { return "file" in obj; }, get: function (obj) { return obj.file; }, set: function (obj, value) { obj.file = value; } }, metadata: _metadata }, _file_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.UpdateCompanyDto = UpdateCompanyDto;
