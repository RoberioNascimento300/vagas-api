"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migrations1709068822100 = void 0;
var Migrations1709068822100 = /** @class */ (function () {
    function Migrations1709068822100() {
        this.name = 'Migrations1709068822100';
    }
    Migrations1709068822100.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE \"tb_certifications\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"name\" character varying NOT NULL, \"institution\" character varying NOT NULL, \"description\" character varying NOT NULL, \"personal_data_id\" uuid NOT NULL, \"created_at\" TIMESTAMP NOT NULL DEFAULT now(), \"updated_at\" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT \"PK_8e804f03029586ca2415f68aa40\" PRIMARY KEY (\"id\"))")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TYPE \"public\".\"tb_courses_type_enum\" AS ENUM('GRADUATION', 'TECHNICAL', 'CAPACITY', 'FREE')")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TYPE \"public\".\"tb_courses_duration_enum\" AS ENUM('FAST', 'MEDIUM', 'LONG')")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TYPE \"public\".\"tb_courses_status_enum\" AS ENUM('COMPLETED', 'ONGOING', 'LOCKED')")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"tb_courses\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"name\" character varying NOT NULL, \"type\" \"public\".\"tb_courses_type_enum\" NOT NULL DEFAULT 'FREE', \"duration\" \"public\".\"tb_courses_duration_enum\" NOT NULL DEFAULT 'FAST', \"institution\" character varying NOT NULL, \"start_date\" TIMESTAMP NOT NULL, \"status\" \"public\".\"tb_courses_status_enum\" NOT NULL DEFAULT 'COMPLETED', \"end_date\" TIMESTAMP NOT NULL, \"description\" character varying, \"personal_data_id\" uuid NOT NULL, \"created_at\" TIMESTAMP NOT NULL DEFAULT now(), \"updated_at\" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT \"PK_ead041f447c63ddcd1037c98450\" PRIMARY KEY (\"id\"))")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TYPE \"public\".\"tb_languages_writing_enum\" AS ENUM('BASIC', 'INTERMEDITE', 'ADVANCED', 'FLUENT')")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TYPE \"public\".\"tb_languages_reading_enum\" AS ENUM('BASIC', 'INTERMEDITE', 'ADVANCED', 'FLUENT')")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TYPE \"public\".\"tb_languages_listening_enum\" AS ENUM('BASIC', 'INTERMEDITE', 'ADVANCED', 'FLUENT')")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TYPE \"public\".\"tb_languages_speaking_enum\" AS ENUM('BASIC', 'INTERMEDITE', 'ADVANCED', 'FLUENT')")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"tb_languages\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"language\" character varying NOT NULL, \"writing\" \"public\".\"tb_languages_writing_enum\" NOT NULL DEFAULT 'BASIC', \"reading\" \"public\".\"tb_languages_reading_enum\" NOT NULL DEFAULT 'BASIC', \"listening\" \"public\".\"tb_languages_listening_enum\" NOT NULL DEFAULT 'BASIC', \"speaking\" \"public\".\"tb_languages_speaking_enum\" NOT NULL DEFAULT 'BASIC', \"personal_data_id\" uuid NOT NULL, \"created_at\" TIMESTAMP NOT NULL DEFAULT now(), \"updated_at\" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT \"PK_5e33d6387caef545eea9a74573c\" PRIMARY KEY (\"id\"))")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TYPE \"public\".\"tb_personal_data_gender_enum\" AS ENUM('CIS_MALE', 'CIS_FEMALE', 'TRANS_MALE', 'TRANS_FEMALE', 'NOT_BINARY', 'NO_ANSWER')")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"tb_personal_data\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"birth\" TIMESTAMP NOT NULL, \"gender\" \"public\".\"tb_personal_data_gender_enum\" NOT NULL DEFAULT 'NO_ANSWER', \"pcd\" boolean NOT NULL, \"st_adress\" character varying NOT NULL, \"city\" character varying NOT NULL, \"region\" character varying NOT NULL, \"created_at\" TIMESTAMP NOT NULL DEFAULT now(), \"updated_at\" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT \"PK_24ce451991ea9a74ea558582a94\" PRIMARY KEY (\"id\"))")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"tb_work_experiences\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"name\" character varying NOT NULL, \"institution\" character varying NOT NULL, \"actual_job\" boolean NOT NULL DEFAULT false, \"start_date\" TIMESTAMP NOT NULL, \"end_date\" TIMESTAMP, \"description\" character varying, \"personal_data_id\" uuid NOT NULL, \"created_at\" TIMESTAMP NOT NULL DEFAULT now(), \"updated_at\" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT \"PK_8de12a6fecb5cdad64068382c6f\" PRIMARY KEY (\"id\"))")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TYPE \"public\".\"tb_users_type_enum\" AS ENUM('ADMIN', 'USER')")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"tb_users\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"name\" character varying NOT NULL, \"email\" character varying NOT NULL, \"password\" character varying NOT NULL, \"policies\" boolean NOT NULL DEFAULT false, \"ip\" character varying, \"type\" \"public\".\"tb_users_type_enum\" NOT NULL DEFAULT 'USER', \"phone\" character varying, \"mainPhone\" character varying, \"city\" character varying, \"state\" character varying, \"profile\" character varying, \"profileKey\" character varying, \"created_at\" TIMESTAMP NOT NULL DEFAULT now(), \"updated_at\" TIMESTAMP NOT NULL DEFAULT now(), \"mailConfirm\" boolean NOT NULL DEFAULT false, \"recoverPasswordToken\" character varying, \"personalDataId\" uuid, CONSTRAINT \"UQ_142ce3112f446974f1c96a5d3ff\" UNIQUE (\"email\"), CONSTRAINT \"REL_0afe3b230cbd95a08c72f9df3f\" UNIQUE (\"personalDataId\"), CONSTRAINT \"PK_a2c23e0679749c22ffa6c2be910\" PRIMARY KEY (\"id\"))")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"tb_curriculum\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"user_id\" uuid NOT NULL, \"file\" character varying NOT NULL, \"fileKey\" character varying NOT NULL, \"created_at\" TIMESTAMP NOT NULL DEFAULT now(), \"desativated_at\" TIMESTAMP, CONSTRAINT \"PK_ddf7974db94c9dd0a776280337b\" PRIMARY KEY (\"id\"))")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"tb_applications\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"job_id\" uuid NOT NULL, \"user_id\" uuid NOT NULL, \"curriculum_id\" uuid NOT NULL, \"created_at\" TIMESTAMP NOT NULL DEFAULT now(), \"updated_at\" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT \"PK_8c067f709c944b9014b3cef3fde\" PRIMARY KEY (\"id\"))")];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"tb_comments\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"comment\" character varying(500) NOT NULL, \"user_id\" uuid NOT NULL, \"job_id\" uuid NOT NULL, \"created_at\" TIMESTAMP NOT NULL DEFAULT now(), \"updated_at\" TIMESTAMP NOT NULL DEFAULT now(), \"desativated_at\" TIMESTAMP, CONSTRAINT \"PK_67a339fc92879623d92d9ffb874\" PRIMARY KEY (\"id\"))")];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TYPE \"public\".\"tb_companies_companysize_enum\" AS ENUM('BIG SIZE', 'HALF SIZE', 'SMALL SIZE')")];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"tb_companies\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"companyName\" character varying NOT NULL, \"email\" character varying NOT NULL, \"password\" character varying NOT NULL, \"cnpj\" character varying NOT NULL, \"created_at\" TIMESTAMP NOT NULL DEFAULT now(), \"updated_at\" TIMESTAMP NOT NULL DEFAULT now(), \"mailConfirm\" boolean NOT NULL DEFAULT false, \"recoverPasswordToken\" character varying, \"companyType\" character varying, \"companySize\" \"public\".\"tb_companies_companysize_enum\", \"uf\" character varying, \"companySite\" character varying, \"otherSite\" json, \"description\" character varying, \"profile\" character varying, \"profileKey\" character varying, CONSTRAINT \"PK_edb1512762c7bc2e16aa57d588d\" PRIMARY KEY (\"id\"))")];
                    case 20:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TYPE \"public\".\"tb_jobs_type_enum\" AS ENUM('ANALYST', 'JUNIOR', 'TRAINEE', 'INTERNSHIP')")];
                    case 21:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TYPE \"public\".\"tb_jobs_typecontract_enum\" AS ENUM('CLT', 'PJ', 'OTHER')")];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TYPE \"public\".\"tb_jobs_modality_enum\" AS ENUM('HYBRID', 'ON_SITE', 'REMOTE')")];
                    case 23:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TYPE \"public\".\"tb_jobs_affirmativetype_enum\" AS ENUM('BLACK_BROWN_PERSON', 'CIS_TRANS_WOMEN', 'LGBTQIA+', 'SIXTY_PLUS', 'PWD')")];
                    case 24:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"tb_jobs\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"title\" character varying NOT NULL, \"description\" character varying NOT NULL, \"prerequisites\" character varying NOT NULL, \"benefits\" character varying, \"type\" \"public\".\"tb_jobs_type_enum\" NOT NULL DEFAULT 'JUNIOR', \"typeContract\" \"public\".\"tb_jobs_typecontract_enum\" DEFAULT 'CLT', \"salaryMin\" integer, \"salaryMax\" integer, \"modality\" \"public\".\"tb_jobs_modality_enum\" NOT NULL DEFAULT 'REMOTE', \"federalUnit\" character varying, \"city\" character varying, \"openEndedContract\" boolean NOT NULL DEFAULT true, \"contractType\" character varying, \"contractText\" character varying, \"affirmative\" boolean NOT NULL DEFAULT true, \"affirmativeType\" \"public\".\"tb_jobs_affirmativetype_enum\", \"company_id\" uuid NOT NULL, \"status\" character varying NOT NULL DEFAULT 'ACTIVE', \"createdAt\" TIMESTAMP NOT NULL DEFAULT now(), \"updatedAt\" TIMESTAMP NOT NULL DEFAULT now(), \"content\" character varying, CONSTRAINT \"PK_2b2b4dc1cd0ce22fb558b7aa77c\" PRIMARY KEY (\"id\"))")];
                    case 25:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"tb_reports\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"job_id\" uuid NOT NULL, \"user_id\" uuid NOT NULL, \"description\" character varying NOT NULL, \"created_at\" TIMESTAMP NOT NULL DEFAULT now(), \"updated_at\" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT \"PK_b7e3c9dcb7829f13b9ae7805b03\" PRIMARY KEY (\"id\"))")];
                    case 26:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Migrations1709068822100.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE \"tb_reports\" DROP CONSTRAINT \"FK_86d265112a095a1daae2e34d669\"")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"tb_reports\" DROP CONSTRAINT \"FK_c95aa2c975cb6369772d5f15c7d\"")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"tb_jobs\" DROP CONSTRAINT \"FK_a64a855331c54d698baddb03b6f\"")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"tb_comments\" DROP CONSTRAINT \"FK_d4e57c6e48ba93300dc02734659\"")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"tb_comments\" DROP CONSTRAINT \"FK_b7d6e83dbfa5e98148529803894\"")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"tb_applications\" DROP CONSTRAINT \"FK_f3502a850c1b2b75a5dbe2c04ee\"")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"tb_applications\" DROP CONSTRAINT \"FK_08c82d5bde7b75b17f54460adda\"")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"tb_applications\" DROP CONSTRAINT \"FK_1408b5e5220c7d0fe25573cb3b9\"")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"tb_curriculum\" DROP CONSTRAINT \"FK_2c53580e4d1f616f6ffee74ba51\"")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"tb_users\" DROP CONSTRAINT \"FK_0afe3b230cbd95a08c72f9df3f0\"")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"tb_work_experiences\" DROP CONSTRAINT \"FK_e668e3b05cc240131e27a41e5b5\"")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"tb_languages\" DROP CONSTRAINT \"FK_ecd946bdf16c31509a966a5002f\"")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"tb_courses\" DROP CONSTRAINT \"FK_beb3c749f9d5000af64c4442989\"")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"tb_certifications\" DROP CONSTRAINT \"FK_75f15015611ef7f444ae3fade23\"")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"tb_reports\"")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"tb_jobs\"")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TYPE \"public\".\"tb_jobs_affirmativetype_enum\"")];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TYPE \"public\".\"tb_jobs_modality_enum\"")];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TYPE \"public\".\"tb_jobs_typecontract_enum\"")];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TYPE \"public\".\"tb_jobs_type_enum\"")];
                    case 20:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"tb_companies\"")];
                    case 21:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TYPE \"public\".\"tb_companies_companysize_enum\"")];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"tb_comments\"")];
                    case 23:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"tb_applications\"")];
                    case 24:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"tb_curriculum\"")];
                    case 25:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"tb_users\"")];
                    case 26:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TYPE \"public\".\"tb_users_type_enum\"")];
                    case 27:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"tb_work_experiences\"")];
                    case 28:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"tb_personal_data\"")];
                    case 29:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TYPE \"public\".\"tb_personal_data_gender_enum\"")];
                    case 30:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"tb_languages\"")];
                    case 31:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TYPE \"public\".\"tb_languages_speaking_enum\"")];
                    case 32:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TYPE \"public\".\"tb_languages_listening_enum\"")];
                    case 33:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TYPE \"public\".\"tb_languages_reading_enum\"")];
                    case 34:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TYPE \"public\".\"tb_languages_writing_enum\"")];
                    case 35:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"tb_courses\"")];
                    case 36:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TYPE \"public\".\"tb_courses_status_enum\"")];
                    case 37:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TYPE \"public\".\"tb_courses_duration_enum\"")];
                    case 38:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TYPE \"public\".\"tb_courses_type_enum\"")];
                    case 39:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"tb_certifications\"")];
                    case 40:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Migrations1709068822100;
}());
exports.Migrations1709068822100 = Migrations1709068822100;
