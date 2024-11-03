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
exports.ListResponseSwagger = exports.MetaPaginationSwagger = exports.CreateUsersSwagger = void 0;
var swagger_1 = require("@nestjs/swagger");
var CreateUsersSwagger = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _created_at_decorators;
    var _created_at_initializers = [];
    return _a = /** @class */ (function () {
            function CreateUsersSwagger() {
                this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
                this.name = __runInitializers(this, _name_initializers, void 0);
                this.email = __runInitializers(this, _email_initializers, void 0);
                this.created_at = __runInitializers(this, _created_at_initializers, void 0);
            }
            return CreateUsersSwagger;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [(0, swagger_1.ApiProperty)({
                    example: '941fb31b-5799-44bc-9870-d7c1d5d2ec2c',
                })];
            _name_decorators = [(0, swagger_1.ApiProperty)({
                    example: 'Fulano de Tal',
                })];
            _email_decorators = [(0, swagger_1.ApiProperty)({
                    example: 'johnsnow+2356@outlook.com',
                })];
            _created_at_decorators = [(0, swagger_1.ApiProperty)({
                    example: '2023-04-06T01:48:41.314Z',
                })];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _created_at_decorators, { kind: "field", name: "created_at", static: false, private: false, access: { has: function (obj) { return "created_at" in obj; }, get: function (obj) { return obj.created_at; }, set: function (obj, value) { obj.created_at = value; } }, metadata: _metadata }, _created_at_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateUsersSwagger = CreateUsersSwagger;
var MetaPaginationSwagger = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _orderByColumn_decorators;
    var _orderByColumn_initializers = [];
    var _page_decorators;
    var _page_initializers = [];
    var _take_decorators;
    var _take_initializers = [];
    var _itemCount_decorators;
    var _itemCount_initializers = [];
    var _pageCount_decorators;
    var _pageCount_initializers = [];
    var _hasPreviousPage_decorators;
    var _hasPreviousPage_initializers = [];
    var _hasNextPage_decorators;
    var _hasNextPage_initializers = [];
    return _a = /** @class */ (function () {
            function MetaPaginationSwagger() {
                this.orderByColumn = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _orderByColumn_initializers, void 0));
                this.page = __runInitializers(this, _page_initializers, void 0);
                this.take = __runInitializers(this, _take_initializers, void 0);
                this.itemCount = __runInitializers(this, _itemCount_initializers, void 0);
                this.pageCount = __runInitializers(this, _pageCount_initializers, void 0);
                this.hasPreviousPage = __runInitializers(this, _hasPreviousPage_initializers, void 0);
                this.hasNextPage = __runInitializers(this, _hasNextPage_initializers, void 0);
            }
            return MetaPaginationSwagger;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _orderByColumn_decorators = [(0, swagger_1.ApiProperty)({
                    example: 'id',
                })];
            _page_decorators = [(0, swagger_1.ApiProperty)({
                    example: '10',
                })];
            _take_decorators = [(0, swagger_1.ApiProperty)({
                    example: '10',
                })];
            _itemCount_decorators = [(0, swagger_1.ApiProperty)({
                    example: 22,
                })];
            _pageCount_decorators = [(0, swagger_1.ApiProperty)({
                    example: 3,
                })];
            _hasPreviousPage_decorators = [(0, swagger_1.ApiProperty)({
                    example: true,
                })];
            _hasNextPage_decorators = [(0, swagger_1.ApiProperty)({
                    example: true,
                })];
            __esDecorate(null, null, _orderByColumn_decorators, { kind: "field", name: "orderByColumn", static: false, private: false, access: { has: function (obj) { return "orderByColumn" in obj; }, get: function (obj) { return obj.orderByColumn; }, set: function (obj, value) { obj.orderByColumn = value; } }, metadata: _metadata }, _orderByColumn_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _page_decorators, { kind: "field", name: "page", static: false, private: false, access: { has: function (obj) { return "page" in obj; }, get: function (obj) { return obj.page; }, set: function (obj, value) { obj.page = value; } }, metadata: _metadata }, _page_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _take_decorators, { kind: "field", name: "take", static: false, private: false, access: { has: function (obj) { return "take" in obj; }, get: function (obj) { return obj.take; }, set: function (obj, value) { obj.take = value; } }, metadata: _metadata }, _take_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _itemCount_decorators, { kind: "field", name: "itemCount", static: false, private: false, access: { has: function (obj) { return "itemCount" in obj; }, get: function (obj) { return obj.itemCount; }, set: function (obj, value) { obj.itemCount = value; } }, metadata: _metadata }, _itemCount_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _pageCount_decorators, { kind: "field", name: "pageCount", static: false, private: false, access: { has: function (obj) { return "pageCount" in obj; }, get: function (obj) { return obj.pageCount; }, set: function (obj, value) { obj.pageCount = value; } }, metadata: _metadata }, _pageCount_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _hasPreviousPage_decorators, { kind: "field", name: "hasPreviousPage", static: false, private: false, access: { has: function (obj) { return "hasPreviousPage" in obj; }, get: function (obj) { return obj.hasPreviousPage; }, set: function (obj, value) { obj.hasPreviousPage = value; } }, metadata: _metadata }, _hasPreviousPage_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _hasNextPage_decorators, { kind: "field", name: "hasNextPage", static: false, private: false, access: { has: function (obj) { return "hasNextPage" in obj; }, get: function (obj) { return obj.hasNextPage; }, set: function (obj, value) { obj.hasNextPage = value; } }, metadata: _metadata }, _hasNextPage_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.MetaPaginationSwagger = MetaPaginationSwagger;
var ListResponseSwagger = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _data_decorators;
    var _data_initializers = [];
    var _meta_decorators;
    var _meta_initializers = [];
    return _a = /** @class */ (function () {
            function ListResponseSwagger() {
                this.data = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _data_initializers, void 0));
                this.meta = __runInitializers(this, _meta_initializers, void 0);
            }
            return ListResponseSwagger;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _data_decorators = [(0, swagger_1.ApiProperty)({
                    isArray: true,
                    type: CreateUsersSwagger,
                })];
            _meta_decorators = [(0, swagger_1.ApiProperty)({
                    isArray: false,
                    type: MetaPaginationSwagger,
                })];
            __esDecorate(null, null, _data_decorators, { kind: "field", name: "data", static: false, private: false, access: { has: function (obj) { return "data" in obj; }, get: function (obj) { return obj.data; }, set: function (obj, value) { obj.data = value; } }, metadata: _metadata }, _data_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _meta_decorators, { kind: "field", name: "meta", static: false, private: false, access: { has: function (obj) { return "meta" in obj; }, get: function (obj) { return obj.meta; }, set: function (obj, value) { obj.meta = value; } }, metadata: _metadata }, _meta_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.ListResponseSwagger = ListResponseSwagger;
