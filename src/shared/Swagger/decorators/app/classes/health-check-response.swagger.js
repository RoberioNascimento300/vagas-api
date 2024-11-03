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
exports.HealthCheckResponse = void 0;
var swagger_1 = require("@nestjs/swagger");
var HealthCheckResponse = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _databaseStatus_decorators;
    var _databaseStatus_initializers = [];
    var _mailerStatus_decorators;
    var _mailerStatus_initializers = [];
    return _a = /** @class */ (function () {
            function HealthCheckResponse() {
                this.databaseStatus = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _databaseStatus_initializers, void 0));
                this.mailerStatus = __runInitializers(this, _mailerStatus_initializers, void 0);
            }
            return HealthCheckResponse;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _databaseStatus_decorators = [(0, swagger_1.ApiProperty)({
                    example: 'DOWN',
                })];
            _mailerStatus_decorators = [(0, swagger_1.ApiProperty)({
                    example: 'OK',
                })];
            __esDecorate(null, null, _databaseStatus_decorators, { kind: "field", name: "databaseStatus", static: false, private: false, access: { has: function (obj) { return "databaseStatus" in obj; }, get: function (obj) { return obj.databaseStatus; }, set: function (obj, value) { obj.databaseStatus = value; } }, metadata: _metadata }, _databaseStatus_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _mailerStatus_decorators, { kind: "field", name: "mailerStatus", static: false, private: false, access: { has: function (obj) { return "mailerStatus" in obj; }, get: function (obj) { return obj.mailerStatus; }, set: function (obj, value) { obj.mailerStatus = value; } }, metadata: _metadata }, _mailerStatus_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.HealthCheckResponse = HealthCheckResponse;
