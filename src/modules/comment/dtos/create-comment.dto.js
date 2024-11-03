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
exports.CreateCommentDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var CreateCommentDto = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _comment_decorators;
    var _comment_initializers = [];
    var _job_id_decorators;
    var _job_id_initializers = [];
    var _user_id_decorators;
    var _user_id_initializers = [];
    return _a = /** @class */ (function () {
            function CreateCommentDto() {
                this.comment = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _comment_initializers, void 0));
                this.job_id = __runInitializers(this, _job_id_initializers, void 0);
                this.user_id = __runInitializers(this, _user_id_initializers, void 0);
            }
            return CreateCommentDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _comment_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Comentário (até 500 caracteres)',
                    example: 'Boa!',
                }), (0, class_validator_1.IsString)({ message: 'O campo comment deve ser uma string' }), (0, class_validator_1.IsNotEmpty)({ message: 'O campo comment não pode estar vazio' }), (0, class_validator_1.MaxLength)(500)];
            _job_id_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'ID do trabalho',
                    example: 'be02e7b0-238a-44c2-b9db-ccb339d63fc9',
                }), (0, class_validator_1.IsString)({ message: 'O campo job_id deve ser uma string' }), (0, class_validator_1.IsNotEmpty)({ message: 'O campo job_id não pode estar vazio' })];
            _user_id_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'ID do usuário',
                    example: 'be02e7b0-238a-44c2-b9db-ccb339d63fc9',
                }), (0, class_validator_1.IsString)({ message: 'O campo user_id deve ser uma string' }), (0, class_validator_1.IsNotEmpty)({ message: 'O campo user_id não pode estar vazio' })];
            __esDecorate(null, null, _comment_decorators, { kind: "field", name: "comment", static: false, private: false, access: { has: function (obj) { return "comment" in obj; }, get: function (obj) { return obj.comment; }, set: function (obj, value) { obj.comment = value; } }, metadata: _metadata }, _comment_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _job_id_decorators, { kind: "field", name: "job_id", static: false, private: false, access: { has: function (obj) { return "job_id" in obj; }, get: function (obj) { return obj.job_id; }, set: function (obj, value) { obj.job_id = value; } }, metadata: _metadata }, _job_id_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _user_id_decorators, { kind: "field", name: "user_id", static: false, private: false, access: { has: function (obj) { return "user_id" in obj; }, get: function (obj) { return obj.user_id; }, set: function (obj, value) { obj.user_id = value; } }, metadata: _metadata }, _user_id_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateCommentDto = CreateCommentDto;
