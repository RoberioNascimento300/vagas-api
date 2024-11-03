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
exports.CoursesEntity = void 0;
var typeorm_1 = require("typeorm");
var personal_data_entity_1 = require("./personal-data.entity");
var CourseTypeEnum;
(function (CourseTypeEnum) {
    CourseTypeEnum["GRADUATION"] = "GRADUATION";
    CourseTypeEnum["TECHNICAL"] = "TECHNICAL";
    CourseTypeEnum["CAPACITY"] = "CAPACITY";
    CourseTypeEnum["FREE"] = "FREE";
})(CourseTypeEnum || (CourseTypeEnum = {}));
var CourseStatusEnum;
(function (CourseStatusEnum) {
    CourseStatusEnum["COMPLETED"] = "COMPLETED";
    CourseStatusEnum["ONGOING"] = "ONGOING";
    CourseStatusEnum["LOCKED"] = "LOCKED";
})(CourseStatusEnum || (CourseStatusEnum = {}));
var CourseDurationEnum;
(function (CourseDurationEnum) {
    CourseDurationEnum["FAST"] = "FAST";
    CourseDurationEnum["MEDIUM"] = "MEDIUM";
    CourseDurationEnum["LONG"] = "LONG";
})(CourseDurationEnum || (CourseDurationEnum = {}));
var CoursesEntity = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('tb_courses')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _type_decorators;
    var _type_initializers = [];
    var _duration_decorators;
    var _duration_initializers = [];
    var _institution_decorators;
    var _institution_initializers = [];
    var _start_date_decorators;
    var _start_date_initializers = [];
    var _status_decorators;
    var _status_initializers = [];
    var _end_date_decorators;
    var _end_date_initializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _personal_data_decorators;
    var _personal_data_initializers = [];
    var _personal_data_id_decorators;
    var _personal_data_id_initializers = [];
    var _created_at_decorators;
    var _created_at_initializers = [];
    var _updated_at_decorators;
    var _updated_at_initializers = [];
    var CoursesEntity = _classThis = /** @class */ (function () {
        function CoursesEntity_1(course) {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.name = __runInitializers(this, _name_initializers, void 0);
            this.type = __runInitializers(this, _type_initializers, void 0);
            this.duration = __runInitializers(this, _duration_initializers, void 0);
            this.institution = __runInitializers(this, _institution_initializers, void 0);
            this.start_date = __runInitializers(this, _start_date_initializers, void 0);
            this.status = __runInitializers(this, _status_initializers, void 0);
            this.end_date = __runInitializers(this, _end_date_initializers, void 0);
            this.description = __runInitializers(this, _description_initializers, void 0);
            this.personal_data = __runInitializers(this, _personal_data_initializers, void 0);
            this.personal_data_id = __runInitializers(this, _personal_data_id_initializers, void 0);
            this.created_at = __runInitializers(this, _created_at_initializers, void 0);
            this.updated_at = __runInitializers(this, _updated_at_initializers, void 0);
            this.id = course === null || course === void 0 ? void 0 : course.id;
            this.name = course === null || course === void 0 ? void 0 : course.name;
            this.type = course === null || course === void 0 ? void 0 : course.type;
            this.duration = course === null || course === void 0 ? void 0 : course.duration;
            this.institution = course === null || course === void 0 ? void 0 : course.institution;
            this.start_date = course === null || course === void 0 ? void 0 : course.start_date;
            this.status = course === null || course === void 0 ? void 0 : course.status;
            this.end_date = course === null || course === void 0 ? void 0 : course.end_date;
            this.description = course === null || course === void 0 ? void 0 : course.description;
            this.personal_data_id = course === null || course === void 0 ? void 0 : course.personal_data_id;
            this.created_at = course === null || course === void 0 ? void 0 : course.created_at;
            this.updated_at = course === null || course === void 0 ? void 0 : course.updated_at;
        }
        return CoursesEntity_1;
    }());
    __setFunctionName(_classThis, "CoursesEntity");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('uuid')];
        _name_decorators = [(0, typeorm_1.Column)()];
        _type_decorators = [(0, typeorm_1.Column)({
                type: 'enum',
                enum: CourseTypeEnum,
                default: CourseTypeEnum.FREE,
            })];
        _duration_decorators = [(0, typeorm_1.Column)({
                type: 'enum',
                enum: CourseDurationEnum,
                default: CourseDurationEnum.FAST,
            })];
        _institution_decorators = [(0, typeorm_1.Column)()];
        _start_date_decorators = [(0, typeorm_1.Column)()];
        _status_decorators = [(0, typeorm_1.Column)({
                type: 'enum',
                enum: CourseStatusEnum,
                default: CourseStatusEnum.COMPLETED,
            })];
        _end_date_decorators = [(0, typeorm_1.Column)()];
        _description_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _personal_data_decorators = [(0, typeorm_1.ManyToOne)(function () { return personal_data_entity_1.PersonalDataEntity; }), (0, typeorm_1.JoinColumn)({ name: 'personal_data_id' })];
        _personal_data_id_decorators = [(0, typeorm_1.Column)()];
        _created_at_decorators = [(0, typeorm_1.CreateDateColumn)()];
        _updated_at_decorators = [(0, typeorm_1.UpdateDateColumn)({ update: true })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: function (obj) { return "type" in obj; }, get: function (obj) { return obj.type; }, set: function (obj, value) { obj.type = value; } }, metadata: _metadata }, _type_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _duration_decorators, { kind: "field", name: "duration", static: false, private: false, access: { has: function (obj) { return "duration" in obj; }, get: function (obj) { return obj.duration; }, set: function (obj, value) { obj.duration = value; } }, metadata: _metadata }, _duration_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _institution_decorators, { kind: "field", name: "institution", static: false, private: false, access: { has: function (obj) { return "institution" in obj; }, get: function (obj) { return obj.institution; }, set: function (obj, value) { obj.institution = value; } }, metadata: _metadata }, _institution_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _start_date_decorators, { kind: "field", name: "start_date", static: false, private: false, access: { has: function (obj) { return "start_date" in obj; }, get: function (obj) { return obj.start_date; }, set: function (obj, value) { obj.start_date = value; } }, metadata: _metadata }, _start_date_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _end_date_decorators, { kind: "field", name: "end_date", static: false, private: false, access: { has: function (obj) { return "end_date" in obj; }, get: function (obj) { return obj.end_date; }, set: function (obj, value) { obj.end_date = value; } }, metadata: _metadata }, _end_date_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _personal_data_decorators, { kind: "field", name: "personal_data", static: false, private: false, access: { has: function (obj) { return "personal_data" in obj; }, get: function (obj) { return obj.personal_data; }, set: function (obj, value) { obj.personal_data = value; } }, metadata: _metadata }, _personal_data_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _personal_data_id_decorators, { kind: "field", name: "personal_data_id", static: false, private: false, access: { has: function (obj) { return "personal_data_id" in obj; }, get: function (obj) { return obj.personal_data_id; }, set: function (obj, value) { obj.personal_data_id = value; } }, metadata: _metadata }, _personal_data_id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _created_at_decorators, { kind: "field", name: "created_at", static: false, private: false, access: { has: function (obj) { return "created_at" in obj; }, get: function (obj) { return obj.created_at; }, set: function (obj, value) { obj.created_at = value; } }, metadata: _metadata }, _created_at_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _updated_at_decorators, { kind: "field", name: "updated_at", static: false, private: false, access: { has: function (obj) { return "updated_at" in obj; }, get: function (obj) { return obj.updated_at; }, set: function (obj, value) { obj.updated_at = value; } }, metadata: _metadata }, _updated_at_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CoursesEntity = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CoursesEntity = _classThis;
}();
exports.CoursesEntity = CoursesEntity;
