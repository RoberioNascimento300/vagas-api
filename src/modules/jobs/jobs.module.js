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
exports.JobsModule = void 0;
var common_1 = require("@nestjs/common");
var passport_1 = require("@nestjs/passport");
var typeorm_1 = require("@nestjs/typeorm");
var company_module_1 = require("../company/company.module");
var company_repository_1 = require("../company/repository/company-repository");
var mail_module_1 = require("../mails/mail.module");
var jobs_controller_1 = require("./jobs.controller");
var job_repository_1 = require("./repository/job.repository");
var services_1 = require("./services");
var search_job_service_1 = require("./services/search-job.service");
var get_all_jobs_from_logged_company_service_1 = require("./services/get-all-jobs-from-logged-company.service");
var jobs_entity_1 = require("../../../../../../../../../src/database/entities/jobs.entity");
var companies_entity_1 = require("../../../../../../../../../src/database/entities/companies.entity");
var delete_job_service_1 = require("./services/delete-job.service");
var JobsModule = function () {
    var _classDecorators = [(0, common_1.Module)({
            imports: [
                mail_module_1.MailModule,
                company_module_1.CompanyModule,
                typeorm_1.TypeOrmModule.forFeature([job_repository_1.JobRepository, jobs_entity_1.JobsEntity, companies_entity_1.CompaniesEntity]),
                passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            ],
            controllers: [jobs_controller_1.JobsController],
            providers: [
                services_1.CreateJobService,
                services_1.GetAllJobsService,
                get_all_jobs_from_logged_company_service_1.GetAllJobsFromLoggedCompanyService,
                services_1.GetOneJobByIdService,
                services_1.UpdateJobService,
                delete_job_service_1.DeleteJobService,
                search_job_service_1.SearchJobsService,
                job_repository_1.JobRepository,
                company_repository_1.CompanyRepository
            ],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var JobsModule = _classThis = /** @class */ (function () {
        function JobsModule_1() {
        }
        return JobsModule_1;
    }());
    __setFunctionName(_classThis, "JobsModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        JobsModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return JobsModule = _classThis;
}();
exports.JobsModule = JobsModule;
