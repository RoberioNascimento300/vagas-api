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
exports.CommentsEntity = void 0;
var typeorm_1 = require("typeorm");
var jobs_entity_1 = require("./jobs.entity");
var users_entity_1 = require("./users.entity");
var CommentsEntity = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('tb_comments')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _comment_decorators;
    var _comment_initializers = [];
    var _user_decorators;
    var _user_initializers = [];
    var _user_id_decorators;
    var _user_id_initializers = [];
    var _job_decorators;
    var _job_initializers = [];
    var _job_id_decorators;
    var _job_id_initializers = [];
    var _created_at_decorators;
    var _created_at_initializers = [];
    var _updated_at_decorators;
    var _updated_at_initializers = [];
    var _desativated_at_decorators;
    var _desativated_at_initializers = [];
    var CommentsEntity = _classThis = /** @class */ (function () {
        function CommentsEntity_1() {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.comment = __runInitializers(this, _comment_initializers, void 0);
            this.user = __runInitializers(this, _user_initializers, void 0);
            this.user_id = __runInitializers(this, _user_id_initializers, void 0);
            this.job = __runInitializers(this, _job_initializers, void 0);
            this.job_id = __runInitializers(this, _job_id_initializers, void 0);
            this.created_at = __runInitializers(this, _created_at_initializers, void 0);
            this.updated_at = __runInitializers(this, _updated_at_initializers, void 0);
            this.desativated_at = __runInitializers(this, _desativated_at_initializers, void 0);
        }
        return CommentsEntity_1;
    }());
    __setFunctionName(_classThis, "CommentsEntity");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('uuid')];
        _comment_decorators = [(0, typeorm_1.Column)({ length: 500 })];
        _user_decorators = [(0, typeorm_1.ManyToOne)(function () { return users_entity_1.UsersEntity; }, { onDelete: "CASCADE" }), (0, typeorm_1.JoinColumn)({ name: 'user_id' })];
        _user_id_decorators = [(0, typeorm_1.Column)()];
        _job_decorators = [(0, typeorm_1.ManyToOne)(function () { return jobs_entity_1.JobsEntity; }, function (job) { return job.comments; }, { onDelete: "CASCADE" }), (0, typeorm_1.JoinColumn)({ name: 'job_id' })];
        _job_id_decorators = [(0, typeorm_1.Column)()];
        _created_at_decorators = [(0, typeorm_1.CreateDateColumn)()];
        _updated_at_decorators = [(0, typeorm_1.UpdateDateColumn)({ update: true })];
        _desativated_at_decorators = [(0, typeorm_1.DeleteDateColumn)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _comment_decorators, { kind: "field", name: "comment", static: false, private: false, access: { has: function (obj) { return "comment" in obj; }, get: function (obj) { return obj.comment; }, set: function (obj, value) { obj.comment = value; } }, metadata: _metadata }, _comment_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _user_decorators, { kind: "field", name: "user", static: false, private: false, access: { has: function (obj) { return "user" in obj; }, get: function (obj) { return obj.user; }, set: function (obj, value) { obj.user = value; } }, metadata: _metadata }, _user_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _user_id_decorators, { kind: "field", name: "user_id", static: false, private: false, access: { has: function (obj) { return "user_id" in obj; }, get: function (obj) { return obj.user_id; }, set: function (obj, value) { obj.user_id = value; } }, metadata: _metadata }, _user_id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _job_decorators, { kind: "field", name: "job", static: false, private: false, access: { has: function (obj) { return "job" in obj; }, get: function (obj) { return obj.job; }, set: function (obj, value) { obj.job = value; } }, metadata: _metadata }, _job_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _job_id_decorators, { kind: "field", name: "job_id", static: false, private: false, access: { has: function (obj) { return "job_id" in obj; }, get: function (obj) { return obj.job_id; }, set: function (obj, value) { obj.job_id = value; } }, metadata: _metadata }, _job_id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _created_at_decorators, { kind: "field", name: "created_at", static: false, private: false, access: { has: function (obj) { return "created_at" in obj; }, get: function (obj) { return obj.created_at; }, set: function (obj, value) { obj.created_at = value; } }, metadata: _metadata }, _created_at_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _updated_at_decorators, { kind: "field", name: "updated_at", static: false, private: false, access: { has: function (obj) { return "updated_at" in obj; }, get: function (obj) { return obj.updated_at; }, set: function (obj, value) { obj.updated_at = value; } }, metadata: _metadata }, _updated_at_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _desativated_at_decorators, { kind: "field", name: "desativated_at", static: false, private: false, access: { has: function (obj) { return "desativated_at" in obj; }, get: function (obj) { return obj.desativated_at; }, set: function (obj, value) { obj.desativated_at = value; } }, metadata: _metadata }, _desativated_at_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CommentsEntity = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CommentsEntity = _classThis;
}();
exports.CommentsEntity = CommentsEntity;
