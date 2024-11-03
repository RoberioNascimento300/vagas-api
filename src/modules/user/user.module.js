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
exports.UserModule = void 0;
var common_1 = require("@nestjs/common");
var passport_1 = require("@nestjs/passport");
var typeorm_1 = require("@nestjs/typeorm");
var mail_module_1 = require("../mails/mail.module");
var user_repository_1 = require("./repository/user.repository");
var services_1 = require("./services");
var activate_user_service_1 = require("./services/activate-user.service");
var user_controller_1 = require("./user.controller");
var upload_module_1 = require("../upload/upload.module");
var update_password_service_1 = require("./services/update-password.service");
var company_repository_1 = require("../company/repository/company-repository");
var curriculum_repository_1 = require("../curriculum/repository/curriculum-repository");
var users_entity_1 = require("../../../../../../../../../src/database/entities/users.entity");
var companies_entity_1 = require("../../../../../../../../../src/database/entities/companies.entity");
var curriculum_entity_1 = require("../../../../../../../../../src/database/entities/curriculum.entity");
var UserModule = function () {
    var _classDecorators = [(0, common_1.Module)({
            imports: [
                typeorm_1.TypeOrmModule.forFeature([users_entity_1.UsersEntity, companies_entity_1.CompaniesEntity, curriculum_entity_1.CurriculumEntity]),
                passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
                mail_module_1.MailModule,
                upload_module_1.UploadModule,
            ],
            controllers: [user_controller_1.UserController],
            providers: [
                services_1.CreateUserService,
                services_1.FindOneUserService,
                services_1.FindAllUsersService,
                services_1.UpdateUserService,
                services_1.DeleteUserService,
                services_1.RecoveryPasswordByEmail,
                services_1.UpdatePasswordByEmailService,
                update_password_service_1.UpdatePasswordService,
                activate_user_service_1.ActivateUserService,
                user_repository_1.UserRepository,
                company_repository_1.CompanyRepository,
                curriculum_repository_1.CurriculumRepository
            ],
            exports: [services_1.RecoveryPasswordByEmail],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var UserModule = _classThis = /** @class */ (function () {
        function UserModule_1() {
        }
        return UserModule_1;
    }());
    __setFunctionName(_classThis, "UserModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UserModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UserModule = _classThis;
}();
exports.UserModule = UserModule;
