"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validSchema = void 0;
var ajv_1 = __importDefault(require("ajv"));
exports.validSchema = function (paramObj, schema) {
    var ajv = new ajv_1.default({ allErrors: true });
    var valid = ajv.validate(schema, paramObj);
    return valid ? { isValid: true, error: null } : { isValid: false, error: ajv.errors ? ajv.errors[0] : null };
};
