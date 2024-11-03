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
exports.PageOptionsDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var _1 = require(".");
var PageOptionsDto = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _order_decorators;
    var _order_initializers = [];
    var _page_decorators;
    var _page_initializers = [];
    var _take_decorators;
    var _take_initializers = [];
    var _orderByColumn_decorators;
    var _orderByColumn_initializers = [];
    return _a = /** @class */ (function () {
            function PageOptionsDto() {
                this.order = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _order_initializers, _1.Order.ASC));
                this.page = __runInitializers(this, _page_initializers, 1);
                this.take = __runInitializers(this, _take_initializers, 10);
                this.orderByColumn = __runInitializers(this, _orderByColumn_initializers, 'id');
            }
            return PageOptionsDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _order_decorators = [(0, class_validator_1.IsEnum)(_1.Order), (0, class_validator_1.IsOptional)(), (0, swagger_1.ApiProperty)({
                    description: 'Ordenação da lista',
                    default: 'ASC',
                })];
            _page_decorators = [(0, class_transformer_1.Type)(function () { return Number; }), (0, class_validator_1.IsInt)(), (0, class_validator_1.Min)(1), (0, class_validator_1.IsOptional)(), (0, swagger_1.ApiProperty)({
                    description: 'Numero da pagina',
                    default: 1,
                })];
            _take_decorators = [(0, class_transformer_1.Type)(function () { return Number; }), (0, class_validator_1.IsInt)(), (0, class_validator_1.Min)(1), (0, class_validator_1.IsOptional)(), (0, swagger_1.ApiProperty)({
                    description: 'Itens por pagina',
                    default: 10,
                })];
            _orderByColumn_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), (0, swagger_1.ApiProperty)({
                    description: 'Ordenação por uma coluna espeficica',
                    default: 'id',
                })];
            __esDecorate(null, null, _order_decorators, { kind: "field", name: "order", static: false, private: false, access: { has: function (obj) { return "order" in obj; }, get: function (obj) { return obj.order; }, set: function (obj, value) { obj.order = value; } }, metadata: _metadata }, _order_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _page_decorators, { kind: "field", name: "page", static: false, private: false, access: { has: function (obj) { return "page" in obj; }, get: function (obj) { return obj.page; }, set: function (obj, value) { obj.page = value; } }, metadata: _metadata }, _page_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _take_decorators, { kind: "field", name: "take", static: false, private: false, access: { has: function (obj) { return "take" in obj; }, get: function (obj) { return obj.take; }, set: function (obj, value) { obj.take = value; } }, metadata: _metadata }, _take_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _orderByColumn_decorators, { kind: "field", name: "orderByColumn", static: false, private: false, access: { has: function (obj) { return "orderByColumn" in obj; }, get: function (obj) { return obj.orderByColumn; }, set: function (obj, value) { obj.orderByColumn = value; } }, metadata: _metadata }, _orderByColumn_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.PageOptionsDto = PageOptionsDto;
