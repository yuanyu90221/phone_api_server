import parsePhoneNumber, {parsePhoneNumberWithError, ParseError} from 'libphonenumber-js/max';
import { ErrorCode } from '../enums/errorCode';
import { ERRORS } from '../enums/errorName';
import { HttpException } from '../exceptions/HttpException';
import {phoneInput, phoneParseOutput} from '../interfaces'
import { logger } from '../lib/logger';
export const phoneParseFunc = (parseIntput: phoneInput) :phoneParseOutput => {
    try {
        const phoneNumber = parseIntput.country !== '' ? parsePhoneNumberWithError(parseIntput.phone, parseIntput.country): parsePhoneNumberWithError(parseIntput.phone); 
        return {
            phoneNumber
        }
    } catch (error) {
        const message = error.message? error.message: error.toString();
        if (error.name !==  ERRORS.HttpException) {
            error = new HttpException({status:400,  message, errCode:ErrorCode.PhoneParseError, client_message: `[phoneParseFunc] parse error with input:'${parseIntput.phone}' with error message ${message}, please try another input again`});
        }
        throw error;
    }
};