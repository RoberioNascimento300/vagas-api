"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var class_validator_1 = require("class-validator");
var cpf_cnpj_validator_1 = require("cpf-cnpj-validator");
function IsCPForCNPJ(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'IsCPForCNPJ',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate: function (value) {
                    if (!value)
                        return true;
                    return cpf_cnpj_validator_1.cpf.isValid(value) || cpf_cnpj_validator_1.cnpj.isValid(value);
                },
                defaultMessage: function (validationArguments) {
                    return "".concat(validationArguments.property, " must be a valid CPF or CNPJ document");
                },
            },
        });
    };
}
exports.default = IsCPForCNPJ;
