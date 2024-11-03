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
exports.UsersEntity = void 0;
var typeorm_1 = require("typeorm");
var applications_entity_1 = require("./applications.entity");
var curriculum_entity_1 = require("./curriculum.entity");
var personal_data_entity_1 = require("./personal-data.entity");
var RolesEnum;
(function (RolesEnum) {
    RolesEnum["ADMIN"] = "ADMIN";
    RolesEnum["USER"] = "USER";
})(RolesEnum || (RolesEnum = {}));
var UsersEntity = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('tb_users')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _password_decorators;
    var _password_initializers = [];
    var _policies_decorators;
    var _policies_initializers = [];
    var _ip_decorators;
    var _ip_initializers = [];
    var _type_decorators;
    var _type_initializers = [];
    var _phone_decorators;
    var _phone_initializers = [];
    var _mainPhone_decorators;
    var _mainPhone_initializers = [];
    var _city_decorators;
    var _city_initializers = [];
    var _state_decorators;
    var _state_initializers = [];
    var _profile_decorators;
    var _profile_initializers = [];
    var _profileKey_decorators;
    var _profileKey_initializers = [];
    var _personalData_decorators;
    var _personalData_initializers = [];
    var _curriculums_decorators;
    var _curriculums_initializers = [];
    var _applications_decorators;
    var _applications_initializers = [];
    var _created_at_decorators;
    var _created_at_initializers = [];
    var _updated_at_decorators;
    var _updated_at_initializers = [];
    var _mailConfirm_decorators;
    var _mailConfirm_initializers = [];
    var _recoverPasswordToken_decorators;
    var _recoverPasswordToken_initializers = [];
    var UsersEntity = _classThis = /** @class */ (function () {
        function UsersEntity_1(user) {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.name = __runInitializers(this, _name_initializers, void 0);
            this.email = __runInitializers(this, _email_initializers, void 0);
            this.password = __runInitializers(this, _password_initializers, void 0);
            this.policies = __runInitializers(this, _policies_initializers, void 0);
            this.ip = __runInitializers(this, _ip_initializers, void 0);
            this.type = __runInitializers(this, _type_initializers, void 0);
            this.phone = __runInitializers(this, _phone_initializers, void 0);
            this.mainPhone = __runInitializers(this, _mainPhone_initializers, void 0);
            this.city = __runInitializers(this, _city_initializers, void 0);
            this.state = __runInitializers(this, _state_initializers, void 0);
            this.profile = __runInitializers(this, _profile_initializers, void 0);
            this.profileKey = __runInitializers(this, _profileKey_initializers, void 0);
            this.personalData = __runInitializers(this, _personalData_initializers, void 0);
            this.curriculums = __runInitializers(this, _curriculums_initializers, void 0);
            this.applications = __runInitializers(this, _applications_initializers, void 0);
            this.created_at = __runInitializers(this, _created_at_initializers, void 0);
            this.updated_at = __runInitializers(this, _updated_at_initializers, void 0);
            this.mailConfirm = __runInitializers(this, _mailConfirm_initializers, void 0);
            this.recoverPasswordToken = __runInitializers(this, _recoverPasswordToken_initializers, void 0);
            this.id = user === null || user === void 0 ? void 0 : user.id;
            this.name = user === null || user === void 0 ? void 0 : user.name;
            this.email = user === null || user === void 0 ? void 0 : user.email;
            this.password = user === null || user === void 0 ? void 0 : user.password;
            this.type = user === null || user === void 0 ? void 0 : user.type;
            this.mailConfirm = user === null || user === void 0 ? void 0 : user.mailConfirm;
            this.recoverPasswordToken = user === null || user === void 0 ? void 0 : user.recoverPasswordToken;
            this.profile = user === null || user === void 0 ? void 0 : user.profile;
            this.profileKey = user === null || user === void 0 ? void 0 : user.profileKey;
            this.created_at = user === null || user === void 0 ? void 0 : user.created_at;
            this.updated_at = user === null || user === void 0 ? void 0 : user.updated_at;
        }
        return UsersEntity_1;
    }());
    __setFunctionName(_classThis, "UsersEntity");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('uuid')];
        _name_decorators = [(0, typeorm_1.Column)()];
        _email_decorators = [(0, typeorm_1.Column)({ unique: true })];
        _password_decorators = [(0, typeorm_1.Column)()];
        _policies_decorators = [(0, typeorm_1.Column)({ default: false })];
        _ip_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _type_decorators = [(0, typeorm_1.Column)({
                type: 'enum',
                enum: ['ADMIN', 'USER'],
                default: RolesEnum.USER,
            })];
        _phone_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _mainPhone_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _city_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _state_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _profile_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _profileKey_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _personalData_decorators = [(0, typeorm_1.OneToOne)(function () { return personal_data_entity_1.PersonalDataEntity; }), (0, typeorm_1.JoinColumn)()];
        _curriculums_decorators = [(0, typeorm_1.OneToMany)(function () { return curriculum_entity_1.CurriculumEntity; }, function (curriculum) { return curriculum.user; })];
        _applications_decorators = [(0, typeorm_1.OneToMany)(function () { return applications_entity_1.ApplicationEntity; }, function (application) { return application.user; })];
        _created_at_decorators = [(0, typeorm_1.CreateDateColumn)()];
        _updated_at_decorators = [(0, typeorm_1.UpdateDateColumn)({ update: true })];
        _mailConfirm_decorators = [(0, typeorm_1.Column)({ default: false })];
        _recoverPasswordToken_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: function (obj) { return "password" in obj; }, get: function (obj) { return obj.password; }, set: function (obj, value) { obj.password = value; } }, metadata: _metadata }, _password_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _policies_decorators, { kind: "field", name: "policies", static: false, private: false, access: { has: function (obj) { return "policies" in obj; }, get: function (obj) { return obj.policies; }, set: function (obj, value) { obj.policies = value; } }, metadata: _metadata }, _policies_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _ip_decorators, { kind: "field", name: "ip", static: false, private: false, access: { has: function (obj) { return "ip" in obj; }, get: function (obj) { return obj.ip; }, set: function (obj, value) { obj.ip = value; } }, metadata: _metadata }, _ip_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: function (obj) { return "type" in obj; }, get: function (obj) { return obj.type; }, set: function (obj, value) { obj.type = value; } }, metadata: _metadata }, _type_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _phone_decorators, { kind: "field", name: "phone", static: false, private: false, access: { has: function (obj) { return "phone" in obj; }, get: function (obj) { return obj.phone; }, set: function (obj, value) { obj.phone = value; } }, metadata: _metadata }, _phone_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _mainPhone_decorators, { kind: "field", name: "mainPhone", static: false, private: false, access: { has: function (obj) { return "mainPhone" in obj; }, get: function (obj) { return obj.mainPhone; }, set: function (obj, value) { obj.mainPhone = value; } }, metadata: _metadata }, _mainPhone_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _city_decorators, { kind: "field", name: "city", static: false, private: false, access: { has: function (obj) { return "city" in obj; }, get: function (obj) { return obj.city; }, set: function (obj, value) { obj.city = value; } }, metadata: _metadata }, _city_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _state_decorators, { kind: "field", name: "state", static: false, private: false, access: { has: function (obj) { return "state" in obj; }, get: function (obj) { return obj.state; }, set: function (obj, value) { obj.state = value; } }, metadata: _metadata }, _state_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _profile_decorators, { kind: "field", name: "profile", static: false, private: false, access: { has: function (obj) { return "profile" in obj; }, get: function (obj) { return obj.profile; }, set: function (obj, value) { obj.profile = value; } }, metadata: _metadata }, _profile_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _profileKey_decorators, { kind: "field", name: "profileKey", static: false, private: false, access: { has: function (obj) { return "profileKey" in obj; }, get: function (obj) { return obj.profileKey; }, set: function (obj, value) { obj.profileKey = value; } }, metadata: _metadata }, _profileKey_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _personalData_decorators, { kind: "field", name: "personalData", static: false, private: false, access: { has: function (obj) { return "personalData" in obj; }, get: function (obj) { return obj.personalData; }, set: function (obj, value) { obj.personalData = value; } }, metadata: _metadata }, _personalData_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _curriculums_decorators, { kind: "field", name: "curriculums", static: false, private: false, access: { has: function (obj) { return "curriculums" in obj; }, get: function (obj) { return obj.curriculums; }, set: function (obj, value) { obj.curriculums = value; } }, metadata: _metadata }, _curriculums_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _applications_decorators, { kind: "field", name: "applications", static: false, private: false, access: { has: function (obj) { return "applications" in obj; }, get: function (obj) { return obj.applications; }, set: function (obj, value) { obj.applications = value; } }, metadata: _metadata }, _applications_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _created_at_decorators, { kind: "field", name: "created_at", static: false, private: false, access: { has: function (obj) { return "created_at" in obj; }, get: function (obj) { return obj.created_at; }, set: function (obj, value) { obj.created_at = value; } }, metadata: _metadata }, _created_at_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _updated_at_decorators, { kind: "field", name: "updated_at", static: false, private: false, access: { has: function (obj) { return "updated_at" in obj; }, get: function (obj) { return obj.updated_at; }, set: function (obj, value) { obj.updated_at = value; } }, metadata: _metadata }, _updated_at_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _mailConfirm_decorators, { kind: "field", name: "mailConfirm", static: false, private: false, access: { has: function (obj) { return "mailConfirm" in obj; }, get: function (obj) { return obj.mailConfirm; }, set: function (obj, value) { obj.mailConfirm = value; } }, metadata: _metadata }, _mailConfirm_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _recoverPasswordToken_decorators, { kind: "field", name: "recoverPasswordToken", static: false, private: false, access: { has: function (obj) { return "recoverPasswordToken" in obj; }, get: function (obj) { return obj.recoverPasswordToken; }, set: function (obj, value) { obj.recoverPasswordToken = value; } }, metadata: _metadata }, _recoverPasswordToken_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UsersEntity = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UsersEntity = _classThis;
}();
exports.UsersEntity = UsersEntity;
