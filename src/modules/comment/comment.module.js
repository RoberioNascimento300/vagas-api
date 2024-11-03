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
exports.CommentModule = void 0;
var common_1 = require("@nestjs/common");
var core_1 = require("@nestjs/core");
var throttler_1 = require("@nestjs/throttler");
var typeorm_1 = require("@nestjs/typeorm");
var job_repository_1 = require("../jobs/repository/job.repository");
var user_repository_1 = require("../user/repository/user.repository");
var comment_controller_1 = require("./comment.controller");
var comment_repository_1 = require("./repository/comment.repository");
var services_1 = require("./services");
var comments_entity_1 = require("../../../../../../../../../src/database/entities/comments.entity");
var jobs_entity_1 = require("../../../../../../../../../src/database/entities/jobs.entity");
var users_entity_1 = require("../../../../../../../../../src/database/entities/users.entity");
var CommentModule = function () {
    var _classDecorators = [(0, common_1.Module)({
            imports: [
                typeorm_1.TypeOrmModule.forFeature([
                    comments_entity_1.CommentsEntity,
                    jobs_entity_1.JobsEntity,
                    users_entity_1.UsersEntity,
                ]),
                throttler_1.ThrottlerModule.forRoot({
                    throttlers: [
                        {
                            ttl: 10000,
                            limit: 4
                        }
                    ]
                }),
            ],
            controllers: [comment_controller_1.CommentController],
            providers: [
                comment_repository_1.CommentRepository,
                job_repository_1.JobRepository,
                user_repository_1.UserRepository,
                services_1.CreateCommentService,
                services_1.GetAllCommentsService,
                services_1.GetCommentByIdService,
                services_1.UpdateCommentService,
                services_1.DeleteCommentService,
                {
                    provide: core_1.APP_GUARD,
                    useClass: throttler_1.ThrottlerGuard,
                },
            ],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var CommentModule = _classThis = /** @class */ (function () {
        function CommentModule_1() {
        }
        return CommentModule_1;
    }());
    __setFunctionName(_classThis, "CommentModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CommentModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CommentModule = _classThis;
}();
exports.CommentModule = CommentModule;
