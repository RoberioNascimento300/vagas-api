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
exports.JobsController = void 0;
var common_1 = require("@nestjs/common");
var passport_1 = require("@nestjs/passport");
var swagger_1 = require("@nestjs/swagger");
var archive_job_swagger_1 = require("../../../../../../../../../src/shared/Swagger/decorators/jobs/archive-job.swagger");
var create_new_job_swagger_1 = require("../../../../../../../../../src/shared/Swagger/decorators/jobs/create-new-job.swagger");
var get_one_job_swagger_1 = require("../../../../../../../../../src/shared/Swagger/decorators/jobs/get-one-job.swagger");
var search_job_swagger_1 = require("../../../../../../../../../src/shared/Swagger/decorators/jobs/search-job.swagger");
var update_job_swagger_1 = require("../../../../../../../../../src/shared/Swagger/decorators/jobs/update-job.swagger");
var get_all_jobs_of_logged_company_swagger_1 = require("../../../../../../../../../src/shared/Swagger/decorators/jobs/get-all-jobs-of-logged-company.swagger");
var get_all_jobs_of_logged_company_swagger_copy_1 = require("../../../../../../../../../src/shared/Swagger/decorators/jobs/get-all-jobs-of-logged-company.swagger copy");
var JobsController = function () {
    var _classDecorators = [(0, swagger_1.ApiTags)('Job'), (0, common_1.Controller)('job')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _createNewJob_decorators;
    var _getAllJobs_decorators;
    var _getAllLoggedCompanyJobs_decorators;
    var _getOneJob_decorators;
    var _updateJob_decorators;
    var _archivedJob_decorators;
    var _searchJobs_decorators;
    var JobsController = _classThis = /** @class */ (function () {
        function JobsController_1(createJobService, getAllJobsService, getOneJobByIdService, updateJobService, deleteJobService, searchJobsService, getAllJobsFromLoggedCompany) {
            this.createJobService = (__runInitializers(this, _instanceExtraInitializers), createJobService);
            this.getAllJobsService = getAllJobsService;
            this.getOneJobByIdService = getOneJobByIdService;
            this.updateJobService = updateJobService;
            this.deleteJobService = deleteJobService;
            this.searchJobsService = searchJobsService;
            this.getAllJobsFromLoggedCompany = getAllJobsFromLoggedCompany;
        }
        JobsController_1.prototype.createNewJob = function (data, company) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.createJobService.execute(data, company)];
                });
            });
        };
        JobsController_1.prototype.getAllJobs = function (pageOptionsDto, params) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.getAllJobsService.execute(pageOptionsDto, params)];
                });
            });
        };
        JobsController_1.prototype.getAllLoggedCompanyJobs = function (company, res) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, status, data;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.getAllJobsFromLoggedCompany.execute(company.id)];
                        case 1:
                            _a = _b.sent(), status = _a.status, data = _a.data;
                            return [2 /*return*/, res.status(status).json(data)];
                    }
                });
            });
        };
        JobsController_1.prototype.getOneJob = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.getOneJobByIdService.execute(id)];
                });
            });
        };
        JobsController_1.prototype.updateJob = function (id, data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.updateJobService.execute(id, data)];
                });
            });
        };
        JobsController_1.prototype.archivedJob = function (jobId, content) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.deleteJobService.execute(jobId, content)];
                });
            });
        };
        JobsController_1.prototype.searchJobs = function (pageOptionsDto, data, keyword) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    keyword = keyword || ' ';
                    return [2 /*return*/, this.searchJobsService.execute(keyword, pageOptionsDto, data)];
                });
            });
        };
        return JobsController_1;
    }());
    __setFunctionName(_classThis, "JobsController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _createNewJob_decorators = [(0, common_1.Post)(), (0, create_new_job_swagger_1.CreateNewJobSwagger)(), (0, swagger_1.ApiBearerAuth)(), (0, common_1.UseGuards)((0, passport_1.AuthGuard)()), (0, swagger_1.ApiOperation)({
                summary: 'Cadastrar uma vaga.',
            })];
        _getAllJobs_decorators = [(0, common_1.Get)(), (0, get_all_jobs_of_logged_company_swagger_copy_1.GetAllJobsSwagger)()];
        _getAllLoggedCompanyJobs_decorators = [(0, get_all_jobs_of_logged_company_swagger_1.GetAllJobsOfLoggedCompanySwagger)(), (0, swagger_1.ApiBearerAuth)(), (0, common_1.UseGuards)((0, passport_1.AuthGuard)()), (0, common_1.Get)('loggedCompanyJobs')];
        _getOneJob_decorators = [(0, common_1.Get)(':id'), (0, get_one_job_swagger_1.GetOneJobSwagger)()];
        _updateJob_decorators = [(0, common_1.Put)(':id'), (0, update_job_swagger_1.UpdateJobSwagger)()];
        _archivedJob_decorators = [(0, common_1.Patch)(':id'), (0, swagger_1.ApiBearerAuth)(), (0, common_1.UseGuards)((0, passport_1.AuthGuard)()), (0, archive_job_swagger_1.ArchiveJobSwagger)()];
        _searchJobs_decorators = [(0, common_1.Post)('/search/:keyword'), (0, search_job_swagger_1.SearchJobSwagger)()];
        __esDecorate(_classThis, null, _createNewJob_decorators, { kind: "method", name: "createNewJob", static: false, private: false, access: { has: function (obj) { return "createNewJob" in obj; }, get: function (obj) { return obj.createNewJob; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getAllJobs_decorators, { kind: "method", name: "getAllJobs", static: false, private: false, access: { has: function (obj) { return "getAllJobs" in obj; }, get: function (obj) { return obj.getAllJobs; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getAllLoggedCompanyJobs_decorators, { kind: "method", name: "getAllLoggedCompanyJobs", static: false, private: false, access: { has: function (obj) { return "getAllLoggedCompanyJobs" in obj; }, get: function (obj) { return obj.getAllLoggedCompanyJobs; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getOneJob_decorators, { kind: "method", name: "getOneJob", static: false, private: false, access: { has: function (obj) { return "getOneJob" in obj; }, get: function (obj) { return obj.getOneJob; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateJob_decorators, { kind: "method", name: "updateJob", static: false, private: false, access: { has: function (obj) { return "updateJob" in obj; }, get: function (obj) { return obj.updateJob; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _archivedJob_decorators, { kind: "method", name: "archivedJob", static: false, private: false, access: { has: function (obj) { return "archivedJob" in obj; }, get: function (obj) { return obj.archivedJob; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _searchJobs_decorators, { kind: "method", name: "searchJobs", static: false, private: false, access: { has: function (obj) { return "searchJobs" in obj; }, get: function (obj) { return obj.searchJobs; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        JobsController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return JobsController = _classThis;
}();
exports.JobsController = JobsController;
