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
exports.CurriculumEntity = void 0;
var typeorm_1 = require("typeorm");
var applications_entity_1 = require("./applications.entity");
var users_entity_1 = require("./users.entity");
var CurriculumEntity = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('tb_curriculum')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _user_id_decorators;
    var _user_id_initializers = [];
    var _user_decorators;
    var _user_initializers = [];
    var _applications_decorators;
    var _applications_initializers = [];
    var _file_decorators;
    var _file_initializers = [];
    var _fileKey_decorators;
    var _fileKey_initializers = [];
    var _created_at_decorators;
    var _created_at_initializers = [];
    var _desativated_at_decorators;
    var _desativated_at_initializers = [];
    var CurriculumEntity = _classThis = /** @class */ (function () {
        function CurriculumEntity_1() {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.user_id = __runInitializers(this, _user_id_initializers, void 0);
            this.user = __runInitializers(this, _user_initializers, void 0);
            this.applications = __runInitializers(this, _applications_initializers, void 0);
            this.file = __runInitializers(this, _file_initializers, void 0);
            this.fileKey = __runInitializers(this, _fileKey_initializers, void 0);
            this.created_at = __runInitializers(this, _created_at_initializers, void 0);
            this.desativated_at = __runInitializers(this, _desativated_at_initializers, void 0);
        }
        return CurriculumEntity_1;
    }());
    __setFunctionName(_classThis, "CurriculumEntity");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('uuid')];
        _user_id_decorators = [(0, typeorm_1.Column)()];
        _user_decorators = [(0, typeorm_1.ManyToOne)(function () { return users_entity_1.UsersEntity; }, { onDelete: "CASCADE" }), (0, typeorm_1.JoinColumn)({ name: 'user_id' })];
        _applications_decorators = [(0, typeorm_1.OneToMany)(function () { return applications_entity_1.ApplicationEntity; }, function (application) { return application.curriculum; })];
        _file_decorators = [(0, typeorm_1.Column)()];
        _fileKey_decorators = [(0, typeorm_1.Column)()];
        _created_at_decorators = [(0, typeorm_1.CreateDateColumn)()];
        _desativated_at_decorators = [(0, typeorm_1.DeleteDateColumn)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _user_id_decorators, { kind: "field", name: "user_id", static: false, private: false, access: { has: function (obj) { return "user_id" in obj; }, get: function (obj) { return obj.user_id; }, set: function (obj, value) { obj.user_id = value; } }, metadata: _metadata }, _user_id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _user_decorators, { kind: "field", name: "user", static: false, private: false, access: { has: function (obj) { return "user" in obj; }, get: function (obj) { return obj.user; }, set: function (obj, value) { obj.user = value; } }, metadata: _metadata }, _user_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _applications_decorators, { kind: "field", name: "applications", static: false, private: false, access: { has: function (obj) { return "applications" in obj; }, get: function (obj) { return obj.applications; }, set: function (obj, value) { obj.applications = value; } }, metadata: _metadata }, _applications_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _file_decorators, { kind: "field", name: "file", static: false, private: false, access: { has: function (obj) { return "file" in obj; }, get: function (obj) { return obj.file; }, set: function (obj, value) { obj.file = value; } }, metadata: _metadata }, _file_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _fileKey_decorators, { kind: "field", name: "fileKey", static: false, private: false, access: { has: function (obj) { return "fileKey" in obj; }, get: function (obj) { return obj.fileKey; }, set: function (obj, value) { obj.fileKey = value; } }, metadata: _metadata }, _fileKey_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _created_at_decorators, { kind: "field", name: "created_at", static: false, private: false, access: { has: function (obj) { return "created_at" in obj; }, get: function (obj) { return obj.created_at; }, set: function (obj, value) { obj.created_at = value; } }, metadata: _metadata }, _created_at_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _desativated_at_decorators, { kind: "field", name: "desativated_at", static: false, private: false, access: { has: function (obj) { return "desativated_at" in obj; }, get: function (obj) { return obj.desativated_at; }, set: function (obj, value) { obj.desativated_at = value; } }, metadata: _metadata }, _desativated_at_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CurriculumEntity = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CurriculumEntity = _classThis;
}();
exports.CurriculumEntity = CurriculumEntity;
