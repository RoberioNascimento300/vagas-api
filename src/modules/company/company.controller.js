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
exports.CompanyController = void 0;
var common_1 = require("@nestjs/common");
var passport_1 = require("@nestjs/passport");
var platform_express_1 = require("@nestjs/platform-express");
var swagger_1 = require("@nestjs/swagger");
var activate_company_swagger_1 = require("../../../../../../../../../src/shared/Swagger/decorators/company/activate-company.swagger");
var create_company_swagger_1 = require("../../../../../../../../../src/shared/Swagger/decorators/company/create-company.swagger");
var delete_company_by_id_swagger_1 = require("../../../../../../../../../src/shared/Swagger/decorators/company/delete-company-by-id.swagger");
var get_all_companies_swagger_1 = require("../../../../../../../../../src/shared/Swagger/decorators/company/get-all-companies.swagger");
var recovery_password_by_email_swagger_1 = require("../../../../../../../../../src/shared/Swagger/decorators/company/recovery-password-by-email.swagger");
var update_company_by_id_swagger_1 = require("../../../../../../../../../src/shared/Swagger/decorators/company/update-company-by-id.swagger");
var update_password_after_recovery_email_swagger_1 = require("../../../../../../../../../src/shared/Swagger/decorators/company/update-password-after-recovery-email.swagger");
var update_password_swagger_1 = require("../../../../../../../../../src/shared/Swagger/decorators/company/update-password.swagger");
var CompanyController = function () {
    var _classDecorators = [(0, swagger_1.ApiTags)('Company'), (0, common_1.Controller)('company')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _createCompany_decorators;
    var _getAllCompanies_decorators;
    var _updatecompanyById_decorators;
    var _recoverPasswordByEmail_decorators;
    var _updatePasswordByEmail_decorators;
    var _updatePassword_decorators;
    var _activateCompany_decorators;
    var _deleteCompanyById_decorators;
    var CompanyController = _classThis = /** @class */ (function () {
        function CompanyController_1(createCompanyService, findAllCompanyService, updateCompanyService, deleteCompanyService, recoveryPasswordByEmail, updatePasswordByEmailService, updateCompanyPassword, activateCompanyService) {
            this.createCompanyService = (__runInitializers(this, _instanceExtraInitializers), createCompanyService);
            this.findAllCompanyService = findAllCompanyService;
            this.updateCompanyService = updateCompanyService;
            this.deleteCompanyService = deleteCompanyService;
            this.recoveryPasswordByEmail = recoveryPasswordByEmail;
            this.updatePasswordByEmailService = updatePasswordByEmailService;
            this.updateCompanyPassword = updateCompanyPassword;
            this.activateCompanyService = activateCompanyService;
        }
        CompanyController_1.prototype.createCompany = function (createcompany, res) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, status;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.createCompanyService.execute(createcompany)];
                        case 1:
                            _a = _b.sent(), data = _a.data, status = _a.status;
                            return [2 /*return*/, res.status(status).send(data)];
                    }
                });
            });
        };
        CompanyController_1.prototype.getAllCompanies = function (pageOptionsDto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.findAllCompanyService.execute(pageOptionsDto)];
                });
            });
        };
        CompanyController_1.prototype.updatecompanyById = function (company, updateCompanyDto, file, res) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, status;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.updateCompanyService.execute(company, updateCompanyDto, file)];
                        case 1:
                            _a = _b.sent(), data = _a.data, status = _a.status;
                            return [2 /*return*/, res.status(status).send(data)];
                    }
                });
            });
        };
        CompanyController_1.prototype.recoverPasswordByEmail = function (_a, res) {
            var email = _a.email;
            return __awaiter(this, void 0, void 0, function () {
                var _b, status, data;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, this.recoveryPasswordByEmail.execute(email)];
                        case 1:
                            _b = _c.sent(), status = _b.status, data = _b.data;
                            return [2 /*return*/, res.status(status).send(data)];
                    }
                });
            });
        };
        CompanyController_1.prototype.updatePasswordByEmail = function (updatePassword, res) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, status;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.updatePasswordByEmailService.execute(updatePassword)];
                        case 1:
                            _a = _b.sent(), data = _a.data, status = _a.status;
                            return [2 /*return*/, res.status(status).send(data)];
                    }
                });
            });
        };
        CompanyController_1.prototype.updatePassword = function (company, updatePassword, res) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, status;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.updateCompanyPassword.execute(company, updatePassword)];
                        case 1:
                            _a = _b.sent(), data = _a.data, status = _a.status;
                            return [2 /*return*/, res.status(status).send(data)];
                    }
                });
            });
        };
        CompanyController_1.prototype.activateCompany = function (id, res) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, status;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.activateCompanyService.execute(id)];
                        case 1:
                            _a = _b.sent(), data = _a.data, status = _a.status;
                            return [2 /*return*/, res.status(status).send(data)];
                    }
                });
            });
        };
        CompanyController_1.prototype.deleteCompanyById = function (_a, res) {
            var id = _a.id;
            return __awaiter(this, void 0, void 0, function () {
                var _b, data, status;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, this.deleteCompanyService.execute(id)];
                        case 1:
                            _b = _c.sent(), data = _b.data, status = _b.status;
                            return [2 /*return*/, res.status(status).send(data)];
                    }
                });
            });
        };
        return CompanyController_1;
    }());
    __setFunctionName(_classThis, "CompanyController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _createCompany_decorators = [(0, common_1.Post)(), (0, create_company_swagger_1.CreateCompanySwagger)()];
        _getAllCompanies_decorators = [(0, common_1.Get)(), (0, get_all_companies_swagger_1.GetAllCompaniesSwagger)()];
        _updatecompanyById_decorators = [(0, swagger_1.ApiBearerAuth)(), (0, common_1.UseGuards)((0, passport_1.AuthGuard)()), (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')), (0, common_1.Put)('edit'), (0, update_company_by_id_swagger_1.UpdateCompanyByIdSwagger)()];
        _recoverPasswordByEmail_decorators = [(0, common_1.Patch)('recovery-password'), (0, recovery_password_by_email_swagger_1.RecoverPasswordByEmailSwagger)()];
        _updatePasswordByEmail_decorators = [(0, common_1.Patch)('update_password_email'), (0, update_password_after_recovery_email_swagger_1.UpdatePasswordAfterRecoveryEmailSwagger)()];
        _updatePassword_decorators = [(0, common_1.Patch)('update_password'), (0, common_1.UseGuards)((0, passport_1.AuthGuard)()), (0, swagger_1.ApiBearerAuth)(), (0, update_password_swagger_1.UpdatePasswordSwagger)()];
        _activateCompany_decorators = [(0, common_1.Patch)(':id'), (0, activate_company_swagger_1.ActivateCompanySwagger)()];
        _deleteCompanyById_decorators = [(0, common_1.Delete)(':id'), (0, delete_company_by_id_swagger_1.DeleteCompanyByIdSwagger)()];
        __esDecorate(_classThis, null, _createCompany_decorators, { kind: "method", name: "createCompany", static: false, private: false, access: { has: function (obj) { return "createCompany" in obj; }, get: function (obj) { return obj.createCompany; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getAllCompanies_decorators, { kind: "method", name: "getAllCompanies", static: false, private: false, access: { has: function (obj) { return "getAllCompanies" in obj; }, get: function (obj) { return obj.getAllCompanies; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updatecompanyById_decorators, { kind: "method", name: "updatecompanyById", static: false, private: false, access: { has: function (obj) { return "updatecompanyById" in obj; }, get: function (obj) { return obj.updatecompanyById; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _recoverPasswordByEmail_decorators, { kind: "method", name: "recoverPasswordByEmail", static: false, private: false, access: { has: function (obj) { return "recoverPasswordByEmail" in obj; }, get: function (obj) { return obj.recoverPasswordByEmail; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updatePasswordByEmail_decorators, { kind: "method", name: "updatePasswordByEmail", static: false, private: false, access: { has: function (obj) { return "updatePasswordByEmail" in obj; }, get: function (obj) { return obj.updatePasswordByEmail; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updatePassword_decorators, { kind: "method", name: "updatePassword", static: false, private: false, access: { has: function (obj) { return "updatePassword" in obj; }, get: function (obj) { return obj.updatePassword; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _activateCompany_decorators, { kind: "method", name: "activateCompany", static: false, private: false, access: { has: function (obj) { return "activateCompany" in obj; }, get: function (obj) { return obj.activateCompany; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deleteCompanyById_decorators, { kind: "method", name: "deleteCompanyById", static: false, private: false, access: { has: function (obj) { return "deleteCompanyById" in obj; }, get: function (obj) { return obj.deleteCompanyById; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CompanyController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CompanyController = _classThis;
}();
exports.CompanyController = CompanyController;
