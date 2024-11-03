"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
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
exports.JobRepository = void 0;
var pagination_1 = require("../../../shared/pagination");
var handle_error_util_1 = require("../../../shared/utils/handle-error.util");
var common_1 = require("@nestjs/common");
var JobRepository = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var JobRepository = _classThis = /** @class */ (function () {
        function JobRepository_1(jobsRepository) {
            this.jobsRepository = jobsRepository;
        }
        JobRepository_1.prototype.createNewJob = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.jobsRepository.save(data).catch(handle_error_util_1.handleError)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        JobRepository_1.prototype.getAllJobsByCompanyId = function (companyId) {
            return __awaiter(this, void 0, void 0, function () {
                var jobs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.jobsRepository.find({ where: { company_id: companyId } })];
                        case 1:
                            jobs = _a.sent();
                            return [2 /*return*/, jobs];
                    }
                });
            });
        };
        JobRepository_1.prototype.getAllJobs = function (pageOptionsDto, params) {
            return __awaiter(this, void 0, void 0, function () {
                var queryBuilder, itemCount, entities, pageMetaDto;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            queryBuilder = this.jobsRepository.createQueryBuilder('jobs');
                            queryBuilder
                                .leftJoin('jobs.company', 'company')
                                .select(['jobs', 'company.id', 'company.companyName', 'company.profile'])
                                .andWhere(params.modality ? 'jobs.modality = :modality' : {}, {
                                modality: params.modality,
                            })
                                .orderBy("jobs.".concat(pageOptionsDto.orderByColumn), pageOptionsDto.order)
                                .skip((pageOptionsDto.page - 1) * pageOptionsDto.take)
                                .take(pageOptionsDto.take);
                            if (params.city) {
                                queryBuilder.andWhere('jobs.city = :city', { city: params.city });
                            }
                            if (params.federalUnit) {
                                queryBuilder.andWhere('jobs.federalUnit = :federalUnit', {
                                    federalUnit: params.federalUnit,
                                });
                            }
                            return [4 /*yield*/, queryBuilder.getCount().catch(handle_error_util_1.handleError)];
                        case 1:
                            itemCount = _a.sent();
                            return [4 /*yield*/, queryBuilder.getRawAndEntities()];
                        case 2:
                            entities = (_a.sent()).entities;
                            pageMetaDto = new pagination_1.PageMetaDto({ itemCount: itemCount, pageOptionsDto: pageOptionsDto });
                            return [2 /*return*/, new pagination_1.PageDto(entities, pageMetaDto)];
                    }
                });
            });
        };
        JobRepository_1.prototype.findOneById = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var queryBuilder;
                return __generator(this, function (_a) {
                    queryBuilder = this.jobsRepository.createQueryBuilder('jobs')
                        .leftJoinAndSelect('jobs.comments', 'comments')
                        .leftJoinAndSelect('comments.user', 'user')
                        .leftJoinAndSelect('jobs.company', 'company')
                        .leftJoinAndSelect('jobs.applications', 'applications')
                        .leftJoinAndSelect('applications.user', 'users')
                        .leftJoinAndSelect('applications.curriculum', 'curriculum')
                        .select([
                        'jobs',
                        'comments.id',
                        'user.id',
                        'company.id',
                        'company.companyName',
                        'company.profile',
                        'applications.id',
                        'users.id',
                        'users.name',
                        'users.email',
                        'curriculum.id',
                        'curriculum.file',
                    ])
                        .where('jobs.id = :id', { id: id });
                    return [2 /*return*/, queryBuilder.getOne().catch(handle_error_util_1.handleError)];
                });
            });
        };
        JobRepository_1.prototype.updateJob = function (id, data) {
            return __awaiter(this, void 0, void 0, function () {
                var job;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.jobsRepository.findOneBy({ id: id }).catch(handle_error_util_1.handleError)];
                        case 1:
                            job = _a.sent();
                            return [2 /*return*/, this.jobsRepository.save(__assign(__assign({}, job), data)).catch(handle_error_util_1.handleError)];
                    }
                });
            });
        };
        JobRepository_1.prototype.searchJobs = function (searchQuery, pageOptionsDto, params) {
            return __awaiter(this, void 0, void 0, function () {
                var queryBuilder, itemCount, entities;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            queryBuilder = this.jobsRepository.createQueryBuilder('job');
                            queryBuilder
                                .leftJoin('job.company', 'company')
                                .select(['job', 'company.id', 'company.companyName', 'company.profile'])
                                .andWhere("job.title ILIKE '%".concat(searchQuery, "%'"))
                                .andWhere("job.status = 'ACTIVE'")
                                .orderBy("job.".concat(pageOptionsDto.orderByColumn), pageOptionsDto.order)
                                .skip((pageOptionsDto.page - 1) * pageOptionsDto.take)
                                .take(pageOptionsDto.take);
                            if (params.city) {
                                queryBuilder.andWhere('job.city = :city', { city: params.city });
                            }
                            if (params.federalUnit) {
                                queryBuilder.andWhere('job.federalUnit = :federalUnit', {
                                    federalUnit: params.federalUnit,
                                });
                            }
                            if (params.modality) {
                                queryBuilder.andWhere('job.modality = :modality', {
                                    modality: params.modality,
                                });
                            }
                            return [4 /*yield*/, queryBuilder.getCount().catch(handle_error_util_1.handleError)];
                        case 1:
                            itemCount = _a.sent();
                            return [4 /*yield*/, queryBuilder
                                    .getRawAndEntities()
                                    .catch(handle_error_util_1.handleError)];
                        case 2:
                            entities = (_a.sent()).entities;
                            return [2 /*return*/, { itemCount: itemCount, entities: entities }];
                    }
                });
            });
        };
        return JobRepository_1;
    }());
    __setFunctionName(_classThis, "JobRepository");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        JobRepository = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return JobRepository = _classThis;
}();
exports.JobRepository = JobRepository;
