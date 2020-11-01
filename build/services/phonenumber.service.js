"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneParseFunc = void 0;
var max_1 = require("libphonenumber-js/max");
var errorCode_1 = require("../enums/errorCode");
var errorName_1 = require("../enums/errorName");
var HttpException_1 = require("../exceptions/HttpException");
exports.phoneParseFunc = function (parseIntput) {
    try {
        var phoneNumber = parseIntput.country !== '' ? max_1.parsePhoneNumberWithError(parseIntput.phone, parseIntput.country) : max_1.parsePhoneNumberWithError(parseIntput.phone);
        return {
            phoneNumber: phoneNumber
        };
    }
    catch (error) {
        var message = error.message ? error.message : error.toString();
        if (error.name !== errorName_1.ERRORS.HttpException) {
            error = new HttpException_1.HttpException({ status: 400, message: message, errCode: errorCode_1.ErrorCode.PhoneParseError, client_message: "[phoneParseFunc] parse error with input:'" + parseIntput.phone + "' with error message " + message + ", please try another input again" });
        }
        throw error;
    }
};
