"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPostPhoneValid = void 0;
var post_phoneNumber_json_1 = __importDefault(require("../api_in_schema/post_phoneNumber.json"));
var ajv_service_1 = require("./ajv.service");
exports.isPostPhoneValid = function (paramObj) {
    return ajv_service_1.validSchema(paramObj, post_phoneNumber_json_1.default);
};
