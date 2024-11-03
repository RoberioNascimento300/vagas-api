"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var throttler_1 = require("@nestjs/throttler");
var create_comment_swagger_1 = require("../../../../../../../../../src/shared/Swagger/decorators/comment/create-comment.swagger");
var delete_commentary_swagger_1 = require("../../../../../../../../../src/shared/Swagger/decorators/comment/delete-commentary.swagger");
var get_all_commentaries_swagger_1 = require("../../../../../../../../../src/shared/Swagger/decorators/comment/get-all-commentaries.swagger");
var get_one_commentary_swagger_1 = require("../../../../../../../../../src/shared/Swagger/decorators/comment/get-one-commentary.swagger");
var update_commentary_swagger_1 = require("../../../../../../../../../src/shared/Swagger/decorators/comment/update-commentary.swagger");
var CommentController = function () {
    var _classDecorators = [(0, swagger_1.ApiExcludeController)(), (0, swagger_1.ApiTags)('Commentary'), (0, common_1.Controller)('commentary')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _createCommentary_decorators;
    var _getAllCommentaries_decorators;
    var _getCommentaryById_decorators;
    var _updateCommentary_decorators;
    var _deleteCommentary_decorators;
    var CommentController = _classThis = /** @class */ (function () {
        function CommentController_1(createCommentService, getAllCommentsService, getCommentByIdService, updateCommentService, deleteCommentService) {
            this.createCommentService = (__runInitializers(this, _instanceExtraInitializers), createCommentService);
            this.getAllCommentsService = getAllCommentsService;
            this.getCommentByIdService = getCommentByIdService;
            this.updateCommentService = updateCommentService;
            this.deleteCommentService = deleteCommentService;
        }
        CommentController_1.prototype.createCommentary = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.createCommentService.execute(data)];
                });
            });
        };
        CommentController_1.prototype.getAllCommentaries = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.getAllCommentsService.execute()];
                });
            });
        };
        CommentController_1.prototype.getCommentaryById = function (_a) {
            var id = _a.id;
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2 /*return*/, this.getCommentByIdService.execute(id)];
                });
            });
        };
        CommentController_1.prototype.updateCommentary = function (_a, data) {
            var id = _a.id;
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2 /*return*/, this.updateCommentService.execute(id, data)];
                });
            });
        };
        CommentController_1.prototype.deleteCommentary = function (_a) {
            var id = _a.id;
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2 /*return*/, this.deleteCommentService.execute(id)];
                });
            });
        };
        return CommentController_1;
    }());
    __setFunctionName(_classThis, "CommentController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _createCommentary_decorators = [(0, throttler_1.Throttle)({
                createCommentary: {
                    ttl: 2000,
                    limit: 30
                }
            }), (0, common_1.Post)(), (0, create_comment_swagger_1.CreateCommentSwagger)()];
        _getAllCommentaries_decorators = [(0, common_1.Get)(), (0, get_all_commentaries_swagger_1.GetAllCommentariesSwagger)()];
        _getCommentaryById_decorators = [(0, common_1.Get)(':id'), (0, get_one_commentary_swagger_1.GetOneCommentaryByIdSwagger)()];
        _updateCommentary_decorators = [(0, common_1.Put)(':id'), (0, update_commentary_swagger_1.UpdateCommentarySwagger)()];
        _deleteCommentary_decorators = [(0, common_1.Delete)(':id'), (0, delete_commentary_swagger_1.DeleteCommentarySwagger)()];
        __esDecorate(_classThis, null, _createCommentary_decorators, { kind: "method", name: "createCommentary", static: false, private: false, access: { has: function (obj) { return "createCommentary" in obj; }, get: function (obj) { return obj.createCommentary; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getAllCommentaries_decorators, { kind: "method", name: "getAllCommentaries", static: false, private: false, access: { has: function (obj) { return "getAllCommentaries" in obj; }, get: function (obj) { return obj.getAllCommentaries; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getCommentaryById_decorators, { kind: "method", name: "getCommentaryById", static: false, private: false, access: { has: function (obj) { return "getCommentaryById" in obj; }, get: function (obj) { return obj.getCommentaryById; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateCommentary_decorators, { kind: "method", name: "updateCommentary", static: false, private: false, access: { has: function (obj) { return "updateCommentary" in obj; }, get: function (obj) { return obj.updateCommentary; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deleteCommentary_decorators, { kind: "method", name: "deleteCommentary", static: false, private: false, access: { has: function (obj) { return "deleteCommentary" in obj; }, get: function (obj) { return obj.deleteCommentary; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CommentController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CommentController = _classThis;
}();
exports.CommentController = CommentController;
