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
exports.CompanyModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var upload_module_1 = require("../upload/upload.module");
var user_repository_1 = require("../user/repository/user.repository");
var company_controller_1 = require("./company.controller");
var company_repository_1 = require("./repository/company-repository");
var services_1 = require("./services");
var activate_company_service_1 = require("./services/activate-company.service");
var recovery_password_by_email_service_1 = require("./services/recovery-password-by-email.service");
var update_password_by_email_service_1 = require("./services/update-password-by-email.service");
var update_password_service_1 = require("./services/update-password.service");
var companies_entity_1 = require("../../../../../../../../../src/database/entities/companies.entity");
var users_entity_1 = require("../../../../../../../../../src/database/entities/users.entity");
var CompanyModule = function () {
    var _classDecorators = [(0, common_1.Module)({
            imports: [
                upload_module_1.UploadModule,
                typeorm_1.TypeOrmModule.forFeature([companies_entity_1.CompaniesEntity, users_entity_1.UsersEntity]),
            ],
            controllers: [company_controller_1.CompanyController],
            providers: [
                company_repository_1.CompanyRepository,
                user_repository_1.UserRepository,
                services_1.CreateCompanyService,
                services_1.FindAllCompanyService,
                services_1.UpdateCompanyService,
                services_1.DeleteCompanyService,
                recovery_password_by_email_service_1.RecoveryCompanyPasswordByEmail,
                update_password_by_email_service_1.UpdatePasswordByEmailService,
                update_password_service_1.UpdateCompanyPassword,
                activate_company_service_1.ActivateCompanyService,
            ],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var CompanyModule = _classThis = /** @class */ (function () {
        function CompanyModule_1() {
        }
        return CompanyModule_1;
    }());
    __setFunctionName(_classThis, "CompanyModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CompanyModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CompanyModule = _classThis;
}();
exports.CompanyModule = CompanyModule;
