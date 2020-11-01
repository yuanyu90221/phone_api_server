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
        while (_) try {
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
exports.phoneOutputChecker = exports.phoneInputChecker = void 0;
var errorCode_1 = require("../enums/errorCode");
var errorName_1 = require("../enums/errorName");
var HttpException_1 = require("../exceptions/HttpException");
var logger_1 = require("../lib/logger");
var services_1 = require("../services");
exports.phoneInputChecker = function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
    var phone, validResult, err, message, err_1, message;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                phone = ctx.request.body.phone;
                validResult = services_1.isPostPhoneValid({ phone: phone });
                logger_1.logger.info(validResult);
                if (validResult.isValid) {
                    ctx.state.phone = phone;
                }
                else {
                    err = validResult.error;
                    message = err === null || err === void 0 ? void 0 : err.message;
                    throw new HttpException_1.HttpException({ status: 400, client_message: "[" + ctx.request.method + "][" + ctx.request.path + "][phoneInputChecker]:input data error, please check your input", message: message ? message : '', errCode: errorCode_1.ErrorCode.PhoneInputError });
                }
                return [4 /*yield*/, next()];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                message = err_1.message ? err_1.message : err_1.toString();
                if (err_1.name !== errorName_1.ERRORS.HttpException) {
                    err_1 = new HttpException_1.HttpException({ status: 500, errCode: errorCode_1.ErrorCode.Unknown, message: message });
                }
                throw err_1;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.phoneOutputChecker = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var phoneFormat, validResult, err, message, message;
    return __generator(this, function (_a) {
        try {
            phoneFormat = ctx.state.phoneFormat;
            validResult = services_1.isPostPhoneValidOut({ phone: phoneFormat });
            if (!validResult.isValid) {
                err = validResult.error;
                message = err === null || err === void 0 ? void 0 : err.message;
                throw new HttpException_1.HttpException({ status: 400, client_message: "[" + ctx.request.method + "][" + ctx.request.path + "][phoneOutputChecker]: output api error, please contact us.", message: message ? message : '', errCode: errorCode_1.ErrorCode.PhoneOutputError });
            }
            ctx.status = 200;
            ctx.body = { phone: phoneFormat };
        }
        catch (err) {
            message = err.message ? err.message : err.toString();
            if (err.name !== errorName_1.ERRORS.HttpException) {
                err = new HttpException_1.HttpException({ status: 500, errCode: errorCode_1.ErrorCode.Unknown, message: message });
            }
            throw err;
        }
        return [2 /*return*/];
    });
}); };
