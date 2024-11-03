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
exports.LanguagesEntity = void 0;
var typeorm_1 = require("typeorm");
var personal_data_entity_1 = require("./personal-data.entity");
var ProficenceEnum;
(function (ProficenceEnum) {
    ProficenceEnum["BASIC"] = "BASIC";
    ProficenceEnum["INTERMEDITE"] = "INTERMEDITE";
    ProficenceEnum["ADVANCED"] = "ADVANCED";
    ProficenceEnum["FLUENT"] = "FLUENT";
})(ProficenceEnum || (ProficenceEnum = {}));
var LanguagesEntity = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('tb_languages')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _language_decorators;
    var _language_initializers = [];
    var _writing_decorators;
    var _writing_initializers = [];
    var _reading_decorators;
    var _reading_initializers = [];
    var _listening_decorators;
    var _listening_initializers = [];
    var _speaking_decorators;
    var _speaking_initializers = [];
    var _personal_data_decorators;
    var _personal_data_initializers = [];
    var _personal_data_id_decorators;
    var _personal_data_id_initializers = [];
    var _created_at_decorators;
    var _created_at_initializers = [];
    var _updated_at_decorators;
    var _updated_at_initializers = [];
    var LanguagesEntity = _classThis = /** @class */ (function () {
        function LanguagesEntity_1(language) {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.language = __runInitializers(this, _language_initializers, void 0);
            this.writing = __runInitializers(this, _writing_initializers, void 0);
            this.reading = __runInitializers(this, _reading_initializers, void 0);
            this.listening = __runInitializers(this, _listening_initializers, void 0);
            this.speaking = __runInitializers(this, _speaking_initializers, void 0);
            this.personal_data = __runInitializers(this, _personal_data_initializers, void 0);
            this.personal_data_id = __runInitializers(this, _personal_data_id_initializers, void 0);
            this.created_at = __runInitializers(this, _created_at_initializers, void 0);
            this.updated_at = __runInitializers(this, _updated_at_initializers, void 0);
            this.id = language === null || language === void 0 ? void 0 : language.id;
            this.language = language === null || language === void 0 ? void 0 : language.language;
            this.writing = language === null || language === void 0 ? void 0 : language.writing;
            this.reading = language === null || language === void 0 ? void 0 : language.reading;
            this.listening = language === null || language === void 0 ? void 0 : language.listening;
            this.speaking = language === null || language === void 0 ? void 0 : language.speaking;
            this.personal_data_id = language === null || language === void 0 ? void 0 : language.personal_data_id;
            this.created_at = language === null || language === void 0 ? void 0 : language.created_at;
            this.updated_at = language === null || language === void 0 ? void 0 : language.updated_at;
        }
        return LanguagesEntity_1;
    }());
    __setFunctionName(_classThis, "LanguagesEntity");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('uuid')];
        _language_decorators = [(0, typeorm_1.Column)()];
        _writing_decorators = [(0, typeorm_1.Column)({
                type: 'enum',
                enum: ProficenceEnum,
                default: ProficenceEnum.BASIC,
            })];
        _reading_decorators = [(0, typeorm_1.Column)({
                type: 'enum',
                enum: ProficenceEnum,
                default: ProficenceEnum.BASIC,
            })];
        _listening_decorators = [(0, typeorm_1.Column)({
                type: 'enum',
                enum: ProficenceEnum,
                default: ProficenceEnum.BASIC,
            })];
        _speaking_decorators = [(0, typeorm_1.Column)({
                type: 'enum',
                enum: ProficenceEnum,
                default: ProficenceEnum.BASIC,
            })];
        _personal_data_decorators = [(0, typeorm_1.ManyToOne)(function () { return personal_data_entity_1.PersonalDataEntity; }), (0, typeorm_1.JoinColumn)({ name: 'personal_data_id' })];
        _personal_data_id_decorators = [(0, typeorm_1.Column)()];
        _created_at_decorators = [(0, typeorm_1.CreateDateColumn)()];
        _updated_at_decorators = [(0, typeorm_1.UpdateDateColumn)({ update: true })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _language_decorators, { kind: "field", name: "language", static: false, private: false, access: { has: function (obj) { return "language" in obj; }, get: function (obj) { return obj.language; }, set: function (obj, value) { obj.language = value; } }, metadata: _metadata }, _language_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _writing_decorators, { kind: "field", name: "writing", static: false, private: false, access: { has: function (obj) { return "writing" in obj; }, get: function (obj) { return obj.writing; }, set: function (obj, value) { obj.writing = value; } }, metadata: _metadata }, _writing_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _reading_decorators, { kind: "field", name: "reading", static: false, private: false, access: { has: function (obj) { return "reading" in obj; }, get: function (obj) { return obj.reading; }, set: function (obj, value) { obj.reading = value; } }, metadata: _metadata }, _reading_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _listening_decorators, { kind: "field", name: "listening", static: false, private: false, access: { has: function (obj) { return "listening" in obj; }, get: function (obj) { return obj.listening; }, set: function (obj, value) { obj.listening = value; } }, metadata: _metadata }, _listening_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _speaking_decorators, { kind: "field", name: "speaking", static: false, private: false, access: { has: function (obj) { return "speaking" in obj; }, get: function (obj) { return obj.speaking; }, set: function (obj, value) { obj.speaking = value; } }, metadata: _metadata }, _speaking_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _personal_data_decorators, { kind: "field", name: "personal_data", static: false, private: false, access: { has: function (obj) { return "personal_data" in obj; }, get: function (obj) { return obj.personal_data; }, set: function (obj, value) { obj.personal_data = value; } }, metadata: _metadata }, _personal_data_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _personal_data_id_decorators, { kind: "field", name: "personal_data_id", static: false, private: false, access: { has: function (obj) { return "personal_data_id" in obj; }, get: function (obj) { return obj.personal_data_id; }, set: function (obj, value) { obj.personal_data_id = value; } }, metadata: _metadata }, _personal_data_id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _created_at_decorators, { kind: "field", name: "created_at", static: false, private: false, access: { has: function (obj) { return "created_at" in obj; }, get: function (obj) { return obj.created_at; }, set: function (obj, value) { obj.created_at = value; } }, metadata: _metadata }, _created_at_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _updated_at_decorators, { kind: "field", name: "updated_at", static: false, private: false, access: { has: function (obj) { return "updated_at" in obj; }, get: function (obj) { return obj.updated_at; }, set: function (obj, value) { obj.updated_at = value; } }, metadata: _metadata }, _updated_at_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        LanguagesEntity = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return LanguagesEntity = _classThis;
}();
exports.LanguagesEntity = LanguagesEntity;
