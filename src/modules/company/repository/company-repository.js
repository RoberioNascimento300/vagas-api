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
exports.CompanyRepository = void 0;
var common_1 = require("@nestjs/common");
var pagination_1 = require("../../../../../../../../../../src/shared/pagination");
var handle_error_util_1 = require("../../../shared/utils/handle-error.util");
var CompanyRepository = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var CompanyRepository = _classThis = /** @class */ (function () {
        function CompanyRepository_1(companyRepository) {
            this.companyRepository = companyRepository;
        }
        CompanyRepository_1.prototype.createCompany = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    delete data.passwordConfirmation;
                    return [2 /*return*/, this.companyRepository.save(data).catch(handle_error_util_1.handleError)];
                });
            });
        };
        CompanyRepository_1.prototype.findAllCompany = function (pageOptionsDto) {
            return __awaiter(this, void 0, void 0, function () {
                var queryBuilder, itemCount, entities, pageMetaDto;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            queryBuilder = this.companyRepository.createQueryBuilder('companies');
                            queryBuilder
                                .orderBy("companies.".concat(pageOptionsDto.orderByColumn), pageOptionsDto.order)
                                .skip((pageOptionsDto.page - 1) * pageOptionsDto.take)
                                .take(pageOptionsDto.take);
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
        CompanyRepository_1.prototype.findCompanyById = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var company;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!id) {
                                throw new common_1.NotFoundException('Invalid company ID');
                            }
                            return [4 /*yield*/, this.companyRepository.findOneBy({ id: id }).catch(handle_error_util_1.handleError)];
                        case 1:
                            company = _a.sent();
                            if (!company) {
                                throw new common_1.NotFoundException('Company not found');
                            }
                            console.log('Company with jobs:', company);
                            return [2 /*return*/, company];
                    }
                });
            });
        };
        CompanyRepository_1.prototype.UpdateCompanyById = function (id, data) {
            return __awaiter(this, void 0, void 0, function () {
                var company;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.companyRepository.findOneBy({ id: id }).catch(handle_error_util_1.handleError)];
                        case 1:
                            company = _a.sent();
                            return [4 /*yield*/, this.companyRepository.update(id, __assign(__assign({}, company), data)).catch(handle_error_util_1.handleError)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, this.companyRepository.findOneBy({ id: id }).catch(handle_error_util_1.handleError)];
                    }
                });
            });
        };
        CompanyRepository_1.prototype.findOneByEmail = function (email) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.companyRepository.findOneBy({ email: email }).catch(handle_error_util_1.handleError)];
                });
            });
        };
        CompanyRepository_1.prototype.findEmailInDatabase = function (email) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.companyRepository.findOneBy({ email: email }).catch(handle_error_util_1.handleError)];
                });
            });
        };
        CompanyRepository_1.prototype.findByToken = function (recoverPasswordToken) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.companyRepository.findOneBy({ recoverPasswordToken: recoverPasswordToken }).catch(handle_error_util_1.handleError)];
                });
            });
        };
        CompanyRepository_1.prototype.findOneById = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.companyRepository.findOneBy({ id: id }).catch(handle_error_util_1.handleError)];
                });
            });
        };
        CompanyRepository_1.prototype.findOneByCnpj = function (cnpj) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.companyRepository.findOneBy({ cnpj: cnpj }).catch(handle_error_util_1.handleError)];
                });
            });
        };
        CompanyRepository_1.prototype.updateMyPassword = function (updateMyPasswordDto, id) {
            return __awaiter(this, void 0, void 0, function () {
                var company;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.companyRepository.findOneBy({ id: id }).catch(handle_error_util_1.handleError)];
                        case 1:
                            company = _a.sent();
                            if (!company) {
                                throw new common_1.NotFoundException('Company not found');
                            }
                            return [2 /*return*/, this.companyRepository.update(id, updateMyPasswordDto)
                                    .then(function () {
                                    return _this.companyRepository.findOneBy({ id: id });
                                })
                                    .catch(handle_error_util_1.handleError)];
                    }
                });
            });
        };
        CompanyRepository_1.prototype.updateRecoveryPassword = function (id, recoverPasswordToken) {
            return __awaiter(this, void 0, void 0, function () {
                var company;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.companyRepository.findOneBy({ id: id }).catch(handle_error_util_1.handleError)];
                        case 1:
                            company = _a.sent();
                            company.recoverPasswordToken = recoverPasswordToken;
                            return [4 /*yield*/, this.companyRepository.save(company).catch(handle_error_util_1.handleError)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, company];
                    }
                });
            });
        };
        CompanyRepository_1.prototype.updateCompany = function (company) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.companyRepository.save(company)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, this.findOneById(company.id)];
                    }
                });
            });
        };
        CompanyRepository_1.prototype.activateCompany = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var company;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.companyRepository.findOneBy({ id: id }).catch(handle_error_util_1.handleError)];
                        case 1:
                            company = _a.sent();
                            company.mailConfirm = true;
                            return [4 /*yield*/, this.companyRepository.update(id, company)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, company];
                    }
                });
            });
        };
        CompanyRepository_1.prototype.updatePassword = function (id, password) {
            return __awaiter(this, void 0, void 0, function () {
                var company, data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.companyRepository.findOneBy({ id: id }).catch(handle_error_util_1.handleError)];
                        case 1:
                            company = _a.sent();
                            data = {
                                recoverPasswordToken: null,
                                password: password,
                            };
                            delete company.password;
                            return [4 /*yield*/, this.companyRepository.update(id, __assign(__assign({}, company), data)).catch(handle_error_util_1.handleError)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, this.companyRepository.findOneBy({ id: id }).catch(handle_error_util_1.handleError)];
                    }
                });
            });
        };
        CompanyRepository_1.prototype.deleteCompanyById = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.companyRepository.delete(id).catch(handle_error_util_1.handleError);
                    return [2 /*return*/, { message: 'Company deleted successfully' }];
                });
            });
        };
        return CompanyRepository_1;
    }());
    __setFunctionName(_classThis, "CompanyRepository");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CompanyRepository = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CompanyRepository = _classThis;
}();
exports.CompanyRepository = CompanyRepository;
