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
exports.PersonalDataEntity = void 0;
var typeorm_1 = require("typeorm");
var certifications_entity_1 = require("./certifications.entity");
var courses_entity_1 = require("./courses.entity");
var languages_entity_1 = require("./languages.entity");
var work_experiences_entity_1 = require("./work-experiences.entity");
var GenderEnum;
(function (GenderEnum) {
    GenderEnum["CIS_MALE"] = "CIS_MALE";
    GenderEnum["CIS_FEMALE"] = "CIS_FEMALE";
    GenderEnum["TRANS_MALE"] = "TRANS_MALE";
    GenderEnum["TRANS_FEMALE"] = "TRANS_FEMALE";
    GenderEnum["NOT_BINARY"] = "NOT_BINARY";
    GenderEnum["NO_ANSWER"] = "NO_ANSWER";
})(GenderEnum || (GenderEnum = {}));
var PersonalDataEntity = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('tb_personal_data')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _birth_decorators;
    var _birth_initializers = [];
    var _gender_decorators;
    var _gender_initializers = [];
    var _pcd_decorators;
    var _pcd_initializers = [];
    var _st_adress_decorators;
    var _st_adress_initializers = [];
    var _city_decorators;
    var _city_initializers = [];
    var _region_decorators;
    var _region_initializers = [];
    var _courses_decorators;
    var _courses_initializers = [];
    var _workExperiences_decorators;
    var _workExperiences_initializers = [];
    var _languages_decorators;
    var _languages_initializers = [];
    var _certifications_decorators;
    var _certifications_initializers = [];
    var _created_at_decorators;
    var _created_at_initializers = [];
    var _updated_at_decorators;
    var _updated_at_initializers = [];
    var PersonalDataEntity = _classThis = /** @class */ (function () {
        function PersonalDataEntity_1(personalData) {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.birth = __runInitializers(this, _birth_initializers, void 0);
            this.gender = __runInitializers(this, _gender_initializers, void 0);
            this.pcd = __runInitializers(this, _pcd_initializers, void 0);
            this.st_adress = __runInitializers(this, _st_adress_initializers, void 0);
            this.city = __runInitializers(this, _city_initializers, void 0);
            this.region = __runInitializers(this, _region_initializers, void 0);
            this.courses = __runInitializers(this, _courses_initializers, void 0);
            this.workExperiences = __runInitializers(this, _workExperiences_initializers, void 0);
            this.languages = __runInitializers(this, _languages_initializers, void 0);
            this.certifications = __runInitializers(this, _certifications_initializers, void 0);
            this.created_at = __runInitializers(this, _created_at_initializers, void 0);
            this.updated_at = __runInitializers(this, _updated_at_initializers, void 0);
            this.id = personalData === null || personalData === void 0 ? void 0 : personalData.id;
            this.birth = personalData === null || personalData === void 0 ? void 0 : personalData.birth;
            this.gender = personalData === null || personalData === void 0 ? void 0 : personalData.gender;
            this.pcd = personalData === null || personalData === void 0 ? void 0 : personalData.pcd;
            this.st_adress = personalData === null || personalData === void 0 ? void 0 : personalData.st_adress;
            this.city = personalData === null || personalData === void 0 ? void 0 : personalData.city;
            this.region = personalData === null || personalData === void 0 ? void 0 : personalData.region;
            this.courses = personalData === null || personalData === void 0 ? void 0 : personalData.courses;
            this.workExperiences = personalData === null || personalData === void 0 ? void 0 : personalData.workExperiences;
            this.languages = personalData === null || personalData === void 0 ? void 0 : personalData.languages;
            this.certifications = personalData === null || personalData === void 0 ? void 0 : personalData.certifications;
            this.created_at = personalData === null || personalData === void 0 ? void 0 : personalData.created_at;
            this.updated_at = personalData === null || personalData === void 0 ? void 0 : personalData.updated_at;
        }
        return PersonalDataEntity_1;
    }());
    __setFunctionName(_classThis, "PersonalDataEntity");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('uuid')];
        _birth_decorators = [(0, typeorm_1.Column)()];
        _gender_decorators = [(0, typeorm_1.Column)({
                type: 'enum',
                enum: GenderEnum,
                default: GenderEnum.NO_ANSWER,
            })];
        _pcd_decorators = [(0, typeorm_1.Column)()];
        _st_adress_decorators = [(0, typeorm_1.Column)()];
        _city_decorators = [(0, typeorm_1.Column)()];
        _region_decorators = [(0, typeorm_1.Column)()];
        _courses_decorators = [(0, typeorm_1.OneToMany)(function () { return courses_entity_1.CoursesEntity; }, function (course) { return course.personal_data; })];
        _workExperiences_decorators = [(0, typeorm_1.OneToMany)(function () { return work_experiences_entity_1.WorkExperiencesEntity; }, function (workExperience) { return workExperience.personal_data; })];
        _languages_decorators = [(0, typeorm_1.OneToMany)(function () { return languages_entity_1.LanguagesEntity; }, function (language) { return language.personal_data; })];
        _certifications_decorators = [(0, typeorm_1.OneToMany)(function () { return certifications_entity_1.CertificationsEntity; }, function (certification) { return certification.personal_data; })];
        _created_at_decorators = [(0, typeorm_1.CreateDateColumn)()];
        _updated_at_decorators = [(0, typeorm_1.UpdateDateColumn)({ update: true })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _birth_decorators, { kind: "field", name: "birth", static: false, private: false, access: { has: function (obj) { return "birth" in obj; }, get: function (obj) { return obj.birth; }, set: function (obj, value) { obj.birth = value; } }, metadata: _metadata }, _birth_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _gender_decorators, { kind: "field", name: "gender", static: false, private: false, access: { has: function (obj) { return "gender" in obj; }, get: function (obj) { return obj.gender; }, set: function (obj, value) { obj.gender = value; } }, metadata: _metadata }, _gender_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _pcd_decorators, { kind: "field", name: "pcd", static: false, private: false, access: { has: function (obj) { return "pcd" in obj; }, get: function (obj) { return obj.pcd; }, set: function (obj, value) { obj.pcd = value; } }, metadata: _metadata }, _pcd_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _st_adress_decorators, { kind: "field", name: "st_adress", static: false, private: false, access: { has: function (obj) { return "st_adress" in obj; }, get: function (obj) { return obj.st_adress; }, set: function (obj, value) { obj.st_adress = value; } }, metadata: _metadata }, _st_adress_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _city_decorators, { kind: "field", name: "city", static: false, private: false, access: { has: function (obj) { return "city" in obj; }, get: function (obj) { return obj.city; }, set: function (obj, value) { obj.city = value; } }, metadata: _metadata }, _city_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _region_decorators, { kind: "field", name: "region", static: false, private: false, access: { has: function (obj) { return "region" in obj; }, get: function (obj) { return obj.region; }, set: function (obj, value) { obj.region = value; } }, metadata: _metadata }, _region_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _courses_decorators, { kind: "field", name: "courses", static: false, private: false, access: { has: function (obj) { return "courses" in obj; }, get: function (obj) { return obj.courses; }, set: function (obj, value) { obj.courses = value; } }, metadata: _metadata }, _courses_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _workExperiences_decorators, { kind: "field", name: "workExperiences", static: false, private: false, access: { has: function (obj) { return "workExperiences" in obj; }, get: function (obj) { return obj.workExperiences; }, set: function (obj, value) { obj.workExperiences = value; } }, metadata: _metadata }, _workExperiences_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _languages_decorators, { kind: "field", name: "languages", static: false, private: false, access: { has: function (obj) { return "languages" in obj; }, get: function (obj) { return obj.languages; }, set: function (obj, value) { obj.languages = value; } }, metadata: _metadata }, _languages_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _certifications_decorators, { kind: "field", name: "certifications", static: false, private: false, access: { has: function (obj) { return "certifications" in obj; }, get: function (obj) { return obj.certifications; }, set: function (obj, value) { obj.certifications = value; } }, metadata: _metadata }, _certifications_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _created_at_decorators, { kind: "field", name: "created_at", static: false, private: false, access: { has: function (obj) { return "created_at" in obj; }, get: function (obj) { return obj.created_at; }, set: function (obj, value) { obj.created_at = value; } }, metadata: _metadata }, _created_at_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _updated_at_decorators, { kind: "field", name: "updated_at", static: false, private: false, access: { has: function (obj) { return "updated_at" in obj; }, get: function (obj) { return obj.updated_at; }, set: function (obj, value) { obj.updated_at = value; } }, metadata: _metadata }, _updated_at_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PersonalDataEntity = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PersonalDataEntity = _classThis;
}();
exports.PersonalDataEntity = PersonalDataEntity;
