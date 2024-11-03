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
exports.ApplicationEntity = void 0;
var typeorm_1 = require("typeorm");
var curriculum_entity_1 = require("./curriculum.entity");
var jobs_entity_1 = require("./jobs.entity");
var users_entity_1 = require("./users.entity");
var ApplicationEntity = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('tb_applications')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _job_decorators;
    var _job_initializers = [];
    var _job_id_decorators;
    var _job_id_initializers = [];
    var _user_decorators;
    var _user_initializers = [];
    var _user_id_decorators;
    var _user_id_initializers = [];
    var _curriculum_decorators;
    var _curriculum_initializers = [];
    var _curriculum_id_decorators;
    var _curriculum_id_initializers = [];
    var _created_at_decorators;
    var _created_at_initializers = [];
    var _updated_at_decorators;
    var _updated_at_initializers = [];
    var ApplicationEntity = _classThis = /** @class */ (function () {
        function ApplicationEntity_1() {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.job = __runInitializers(this, _job_initializers, void 0);
            this.job_id = __runInitializers(this, _job_id_initializers, void 0);
            this.user = __runInitializers(this, _user_initializers, void 0);
            this.user_id = __runInitializers(this, _user_id_initializers, void 0);
            this.curriculum = __runInitializers(this, _curriculum_initializers, void 0);
            this.curriculum_id = __runInitializers(this, _curriculum_id_initializers, void 0);
            this.created_at = __runInitializers(this, _created_at_initializers, void 0);
            this.updated_at = __runInitializers(this, _updated_at_initializers, void 0);
        }
        return ApplicationEntity_1;
    }());
    __setFunctionName(_classThis, "ApplicationEntity");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('uuid')];
        _job_decorators = [(0, typeorm_1.ManyToOne)(function () { return jobs_entity_1.JobsEntity; }, { onDelete: "CASCADE" }), (0, typeorm_1.JoinColumn)({ name: 'job_id' })];
        _job_id_decorators = [(0, typeorm_1.Column)()];
        _user_decorators = [(0, typeorm_1.ManyToOne)(function () { return users_entity_1.UsersEntity; }, { onDelete: "CASCADE" }), (0, typeorm_1.JoinColumn)({ name: 'user_id' })];
        _user_id_decorators = [(0, typeorm_1.Column)()];
        _curriculum_decorators = [(0, typeorm_1.ManyToOne)(function () { return curriculum_entity_1.CurriculumEntity; }, { onDelete: "CASCADE" }), (0, typeorm_1.JoinColumn)({ name: 'curriculum_id' })];
        _curriculum_id_decorators = [(0, typeorm_1.Column)()];
        _created_at_decorators = [(0, typeorm_1.CreateDateColumn)()];
        _updated_at_decorators = [(0, typeorm_1.UpdateDateColumn)({ update: true })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _job_decorators, { kind: "field", name: "job", static: false, private: false, access: { has: function (obj) { return "job" in obj; }, get: function (obj) { return obj.job; }, set: function (obj, value) { obj.job = value; } }, metadata: _metadata }, _job_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _job_id_decorators, { kind: "field", name: "job_id", static: false, private: false, access: { has: function (obj) { return "job_id" in obj; }, get: function (obj) { return obj.job_id; }, set: function (obj, value) { obj.job_id = value; } }, metadata: _metadata }, _job_id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _user_decorators, { kind: "field", name: "user", static: false, private: false, access: { has: function (obj) { return "user" in obj; }, get: function (obj) { return obj.user; }, set: function (obj, value) { obj.user = value; } }, metadata: _metadata }, _user_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _user_id_decorators, { kind: "field", name: "user_id", static: false, private: false, access: { has: function (obj) { return "user_id" in obj; }, get: function (obj) { return obj.user_id; }, set: function (obj, value) { obj.user_id = value; } }, metadata: _metadata }, _user_id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _curriculum_decorators, { kind: "field", name: "curriculum", static: false, private: false, access: { has: function (obj) { return "curriculum" in obj; }, get: function (obj) { return obj.curriculum; }, set: function (obj, value) { obj.curriculum = value; } }, metadata: _metadata }, _curriculum_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _curriculum_id_decorators, { kind: "field", name: "curriculum_id", static: false, private: false, access: { has: function (obj) { return "curriculum_id" in obj; }, get: function (obj) { return obj.curriculum_id; }, set: function (obj, value) { obj.curriculum_id = value; } }, metadata: _metadata }, _curriculum_id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _created_at_decorators, { kind: "field", name: "created_at", static: false, private: false, access: { has: function (obj) { return "created_at" in obj; }, get: function (obj) { return obj.created_at; }, set: function (obj, value) { obj.created_at = value; } }, metadata: _metadata }, _created_at_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _updated_at_decorators, { kind: "field", name: "updated_at", static: false, private: false, access: { has: function (obj) { return "updated_at" in obj; }, get: function (obj) { return obj.updated_at; }, set: function (obj, value) { obj.updated_at = value; } }, metadata: _metadata }, _updated_at_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ApplicationEntity = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ApplicationEntity = _classThis;
}();
exports.ApplicationEntity = ApplicationEntity;
