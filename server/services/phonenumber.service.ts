import parsePhoneNumber, {parsePhoneNumberWithError, ParseError} from 'libphonenumber-js/max';
import {phoneInput, phoneParseOutput} from '../interfaces'
export const phoneParseFunc = (parseIntput: phoneInput) :phoneParseOutput => {
    try {
        const phoneNumber = parseIntput.country !== '' ? parsePhoneNumberWithError(parseIntput.phone, parseIntput.country): parsePhoneNumberWithError(parseIntput.phone); 
        return {
            phoneNumber
        }
    } catch (error) {
        throw error;
    }
};