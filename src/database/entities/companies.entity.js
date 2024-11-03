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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompaniesEntity = void 0;
var typeorm_1 = require("typeorm");
var company_size_enum_1 = require("../../modules/company/enum/company-size.enum");
var jobs_entity_1 = require("./jobs.entity");
var CompaniesEntity = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('tb_companies')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _companyName_decorators;
    var _companyName_initializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _password_decorators;
    var _password_initializers = [];
    var _cnpj_decorators;
    var _cnpj_initializers = [];
    var _jobs_decorators;
    var _jobs_initializers = [];
    var _created_at_decorators;
    var _created_at_initializers = [];
    var _updated_at_decorators;
    var _updated_at_initializers = [];
    var _mailConfirm_decorators;
    var _mailConfirm_initializers = [];
    var _recoverPasswordToken_decorators;
    var _recoverPasswordToken_initializers = [];
    var _companyType_decorators;
    var _companyType_initializers = [];
    var _companySize_decorators;
    var _companySize_initializers = [];
    var _uf_decorators;
    var _uf_initializers = [];
    var _companySite_decorators;
    var _companySite_initializers = [];
    var _otherSite_decorators;
    var _otherSite_initializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _profile_decorators;
    var _profile_initializers = [];
    var _profileKey_decorators;
    var _profileKey_initializers = [];
    var CompaniesEntity = _classThis = /** @class */ (function () {
        function CompaniesEntity_1(company) {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.companyName = __runInitializers(this, _companyName_initializers, void 0);
            this.email = __runInitializers(this, _email_initializers, void 0);
            this.password = __runInitializers(this, _password_initializers, void 0);
            this.cnpj = __runInitializers(this, _cnpj_initializers, void 0);
            this.jobs = __runInitializers(this, _jobs_initializers, void 0);
            this.created_at = __runInitializers(this, _created_at_initializers, void 0);
            this.updated_at = __runInitializers(this, _updated_at_initializers, void 0);
            this.mailConfirm = __runInitializers(this, _mailConfirm_initializers, void 0);
            this.recoverPasswordToken = __runInitializers(this, _recoverPasswordToken_initializers, void 0);
            this.companyType = __runInitializers(this, _companyType_initializers, void 0);
            this.companySize = __runInitializers(this, _companySize_initializers, void 0);
            this.uf = __runInitializers(this, _uf_initializers, void 0);
            this.companySite = __runInitializers(this, _companySite_initializers, void 0);
            this.otherSite = __runInitializers(this, _otherSite_initializers, void 0);
            this.description = __runInitializers(this, _description_initializers, void 0);
            this.profile = __runInitializers(this, _profile_initializers, void 0);
            this.profileKey = __runInitializers(this, _profileKey_initializers, void 0);
            this.id = company === null || company === void 0 ? void 0 : company.id;
            this.companyName = company === null || company === void 0 ? void 0 : company.companyName;
            this.email = company === null || company === void 0 ? void 0 : company.email;
            this.password = company === null || company === void 0 ? void 0 : company.password;
            this.cnpj = company === null || company === void 0 ? void 0 : company.cnpj;
            this.mailConfirm = company === null || company === void 0 ? void 0 : company.mailConfirm;
            this.recoverPasswordToken = company === null || company === void 0 ? void 0 : company.recoverPasswordToken;
            this.created_at = company === null || company === void 0 ? void 0 : company.created_at;
            this.updated_at = company === null || company === void 0 ? void 0 : company.updated_at;
        }
        return CompaniesEntity_1;
    }());
    __setFunctionName(_classThis, "CompaniesEntity");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('uuid')];
        _companyName_decorators = [(0, typeorm_1.Column)()];
        _email_decorators = [(0, typeorm_1.Column)()];
        _password_decorators = [(0, typeorm_1.Column)()];
        _cnpj_decorators = [(0, typeorm_1.Column)()];
        _jobs_decorators = [(0, typeorm_1.OneToMany)(function () { return jobs_entity_1.JobsEntity; }, function (jobs) { return jobs.company; })];
        _created_at_decorators = [(0, typeorm_1.CreateDateColumn)()];
        _updated_at_decorators = [(0, typeorm_1.UpdateDateColumn)()];
        _mailConfirm_decorators = [(0, typeorm_1.Column)({ default: false })];
        _recoverPasswordToken_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _companyType_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _companySize_decorators = [(0, typeorm_1.Column)({
                nullable: true,
                type: 'enum',
                enum: [
                    company_size_enum_1.CompanySizeEnum.BIG_SIZE,
                    company_size_enum_1.CompanySizeEnum.HALF_SIZE,
                    company_size_enum_1.CompanySizeEnum.SMALL_SIZE,
                ],
            })];
        _uf_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _companySite_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _otherSite_decorators = [(0, typeorm_1.Column)({ type: 'json', nullable: true })];
        _description_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _profile_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _profileKey_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _companyName_decorators, { kind: "field", name: "companyName", static: false, private: false, access: { has: function (obj) { return "companyName" in obj; }, get: function (obj) { return obj.companyName; }, set: function (obj, value) { obj.companyName = value; } }, metadata: _metadata }, _companyName_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: function (obj) { return "password" in obj; }, get: function (obj) { return obj.password; }, set: function (obj, value) { obj.password = value; } }, metadata: _metadata }, _password_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _cnpj_decorators, { kind: "field", name: "cnpj", static: false, private: false, access: { has: function (obj) { return "cnpj" in obj; }, get: function (obj) { return obj.cnpj; }, set: function (obj, value) { obj.cnpj = value; } }, metadata: _metadata }, _cnpj_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _jobs_decorators, { kind: "field", name: "jobs", static: false, private: false, access: { has: function (obj) { return "jobs" in obj; }, get: function (obj) { return obj.jobs; }, set: function (obj, value) { obj.jobs = value; } }, metadata: _metadata }, _jobs_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _created_at_decorators, { kind: "field", name: "created_at", static: false, private: false, access: { has: function (obj) { return "created_at" in obj; }, get: function (obj) { return obj.created_at; }, set: function (obj, value) { obj.created_at = value; } }, metadata: _metadata }, _created_at_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _updated_at_decorators, { kind: "field", name: "updated_at", static: false, private: false, access: { has: function (obj) { return "updated_at" in obj; }, get: function (obj) { return obj.updated_at; }, set: function (obj, value) { obj.updated_at = value; } }, metadata: _metadata }, _updated_at_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _mailConfirm_decorators, { kind: "field", name: "mailConfirm", static: false, private: false, access: { has: function (obj) { return "mailConfirm" in obj; }, get: function (obj) { return obj.mailConfirm; }, set: function (obj, value) { obj.mailConfirm = value; } }, metadata: _metadata }, _mailConfirm_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _recoverPasswordToken_decorators, { kind: "field", name: "recoverPasswordToken", static: false, private: false, access: { has: function (obj) { return "recoverPasswordToken" in obj; }, get: function (obj) { return obj.recoverPasswordToken; }, set: function (obj, value) { obj.recoverPasswordToken = value; } }, metadata: _metadata }, _recoverPasswordToken_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _companyType_decorators, { kind: "field", name: "companyType", static: false, private: false, access: { has: function (obj) { return "companyType" in obj; }, get: function (obj) { return obj.companyType; }, set: function (obj, value) { obj.companyType = value; } }, metadata: _metadata }, _companyType_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _companySize_decorators, { kind: "field", name: "companySize", static: false, private: false, access: { has: function (obj) { return "companySize" in obj; }, get: function (obj) { return obj.companySize; }, set: function (obj, value) { obj.companySize = value; } }, metadata: _metadata }, _companySize_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _uf_decorators, { kind: "field", name: "uf", static: false, private: false, access: { has: function (obj) { return "uf" in obj; }, get: function (obj) { return obj.uf; }, set: function (obj, value) { obj.uf = value; } }, metadata: _metadata }, _uf_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _companySite_decorators, { kind: "field", name: "companySite", static: false, private: false, access: { has: function (obj) { return "companySite" in obj; }, get: function (obj) { return obj.companySite; }, set: function (obj, value) { obj.companySite = value; } }, metadata: _metadata }, _companySite_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _otherSite_decorators, { kind: "field", name: "otherSite", static: false, private: false, access: { has: function (obj) { return "otherSite" in obj; }, get: function (obj) { return obj.otherSite; }, set: function (obj, value) { obj.otherSite = value; } }, metadata: _metadata }, _otherSite_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _profile_decorators, { kind: "field", name: "profile", static: false, private: false, access: { has: function (obj) { return "profile" in obj; }, get: function (obj) { return obj.profile; }, set: function (obj, value) { obj.profile = value; } }, metadata: _metadata }, _profile_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _profileKey_decorators, { kind: "field", name: "profileKey", static: false, private: false, access: { has: function (obj) { return "profileKey" in obj; }, get: function (obj) { return obj.profileKey; }, set: function (obj, value) { obj.profileKey = value; } }, metadata: _metadata }, _profileKey_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CompaniesEntity = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CompaniesEntity = _classThis;
}();
exports.CompaniesEntity = CompaniesEntity;
